import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const getCurrentPage = () => window.location.hash.replace(/^#\/?/, "");

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  if (currentPage === "politica-de-privacidade") {
    return <PrivacyPolicy />;
  }

  if (currentPage === "termos-de-uso") {
    return <TermsOfUse />;
  }

  return (
    <main>
      <HeroSection />
    </main>
  );
}

export default App;
