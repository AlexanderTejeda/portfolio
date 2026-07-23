import { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "../styles/DeckLauncher.css";

const DeckLauncher = ({ label, deck, children, offset = 0 }) => {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeBtnRef.current?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="deckLauncher"
        style={{ "--deck-offset": offset }}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="deckFan" aria-hidden="true">
          {deck.map((item, i) => (
            <span
              key={i}
              className="deckCard"
              style={{ "--delta": i - (deck.length - 1) / 2, "--order": i }}
            >
              {item}
            </span>
          ))}
        </span>
        <span className="deckCircle">
          <span className="deckLabel">{label}</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <Motion.div
            className="deckOverlay"
            role="dialog"
            aria-modal="true"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <Motion.div
              className="deckOverlayContent"
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 48, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                ref={closeBtnRef}
                type="button"
                className="deckClose"
                onClick={() => setOpen(false)}
                aria-label={`Cerrar ${label}`}
              >
                <FaTimes aria-hidden="true" />
              </button>
              {children}
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeckLauncher;
