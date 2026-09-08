import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { FaSun, FaMoon, FaDesktop, FaChevronDown, FaCheck } from 'react-icons/fa6';

const options = [
  { value: 'system', label: 'Sistema', description: 'Sigue tu dispositivo', Icon: FaDesktop },
  { value: 'light', label: 'Claro', description: 'Luz y tonos cálidos', Icon: FaSun },
  { value: 'dark', label: 'Oscuro', description: 'Suave para la noche', Icon: FaMoon },
];
function subscribe(callback) {
  window.addEventListener('portfolio-theme-change', callback);
  return () => window.removeEventListener('portfolio-theme-change', callback);
}
const getPreference = () => document.documentElement.dataset.themePreference || 'system';

export default function ThemePicker() {
  const preference = useSyncExternalStore(subscribe, getPreference, () => 'system');
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const items = useRef([]);
  const selected = options.find(option => option.value === preference);
  const Icon = selected.Icon;

  useEffect(() => {
    if (!open) return;
    items.current[options.findIndex(option => option.value === preference)]?.focus();
    function outside(event) {
      if (!root.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open, preference]);

  function close() {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  function navigate(event) {
    const index = items.current.indexOf(document.activeElement);
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (index + (event.key === 'ArrowDown' ? 1 : 2)) % 3;
      items.current[next]?.focus();
    }
  }
  return (
    <div className="theme-picker" ref={root} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <button type="button" className="theme-trigger" ref={trigger} aria-label={`Apariencia: ${selected.label}`} aria-haspopup="menu" aria-expanded={open} aria-controls="theme-options" onClick={() => setOpen(!open)} onKeyDown={event => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); }
      }}>
        <Icon aria-hidden="true" /><span>{selected.label}</span><FaChevronDown className="theme-chevron" aria-hidden="true" />
      </button>
      {open && <div className="theme-menu" id="theme-options" role="menu" aria-label="Apariencia" onKeyDown={navigate}>
        <span className="theme-menu-title">APARIENCIA</span>
        {options.map((option, index) => { const { value, label, description, Icon: OptionIcon } = option; return (
          <button type="button" role="menuitemradio" aria-checked={preference === value} key={value} ref={node => { items.current[index] = node; }} tabIndex={-1} onClick={() => {
            close();
            window.portfolioTheme.set(value);
          }}>
            <OptionIcon aria-hidden="true" /><span><strong>{label}</strong><small>{description}</small></span>
            {preference === value && <FaCheck className="theme-check" aria-hidden="true" />}
          </button>
        ); })}
      </div>}
    </div>
  );
}
