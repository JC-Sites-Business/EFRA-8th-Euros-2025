import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";

import App from "./App.tsx";
import { DEFAULT_LOCALE } from "./common/lang/locales";
import "./common/styles/index.scss";
import themeOverides from "./common/styles/muiOverides.ts";

const locale = DEFAULT_LOCALE;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOverides}>
      <IntlProvider locale={locale} key={locale} defaultLocale={DEFAULT_LOCALE}>
        <App />
      </IntlProvider>
    </ThemeProvider>
  </React.StrictMode>
);
