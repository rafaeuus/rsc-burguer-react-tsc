import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Contexts/Providers";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/defaultTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Providers>
          <App />
        </Providers>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
