import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIntlCommon } from "./common/lang/intl-common";
import HomePagePage from "./views/Homepage/page/HomePagePage";

const App: React.FC = () => {
  const { siteLabel } = useIntlCommon();

  useEffect(() => {
    document.title = siteLabel;
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<PageNotFoundView />} />
        <Route path="/" element={<LandingPageView />} /> */}
        <Route path="/" element={<HomePagePage />} />
        <Route path="/home" element={<HomePagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
