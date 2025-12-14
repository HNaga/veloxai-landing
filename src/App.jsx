import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <I18nProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}

export default App;
