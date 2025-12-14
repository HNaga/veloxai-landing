import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
// Import your other existing pages as needed

function App() {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}

export default App;
