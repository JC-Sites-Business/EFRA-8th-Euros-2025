import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./common/lang/intl-common";
import LayoutPage from "./views/Layout/page/LayoutPage";
import PageNotFoundPage from "./views/Layout/page/PageNotFound";
import AboutPage from "./views/About/page/AboutPage";
import HomePage from "./views/Home/page/HomePage";
import InformationPage from "./views/Information/page/InformationPage";
import EventPage from "./views/Event/page/EventPage";
import ContactPage from "./views/Contact/page/ContactPage";

const App: React.FC = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFoundPage />} />
        <Route path="/" element={<LayoutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/Event" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
