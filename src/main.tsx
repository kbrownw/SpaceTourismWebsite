import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ScreenSizeWrapper } from "./context/ScreenSizeContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeWrapper>
        <App />
      </ScreenSizeWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
