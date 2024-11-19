import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./common/lang/intl-common";
import AboutPage from "./views/About/page/AboutPage";
import ContactPage from "./views/Contact/page/ContactPage";
import EventPage from "./views/Event/page/EventPage";
import HomePage from "./views/Home/page/HomePage";
import InformationPage from "./views/Information/page/InformationPage";
import PageNotFoundPage from "./views/Layout/page/PageNotFound";

const App: React.FC = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFoundPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/information" element={<InformationPage />}>
          <Route path="/information/facilities" element={<InformationPage />} />
          <Route path="/information/travel" element={<InformationPage />} />
          <Route path="/information/hotels" element={<InformationPage />} />
          <Route path="/information/vrc" element={<InformationPage />} />
        </Route>
        <Route path="/Event" element={<EventPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
