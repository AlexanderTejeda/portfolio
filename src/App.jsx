import LandingPage from "./pages/LandingPage";
import FloatingContactButton from "./components/FloatingContacButton";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <LandingPage />
      <FloatingContactButton />
      <Analytics />
    </>
  );

}

export default App;