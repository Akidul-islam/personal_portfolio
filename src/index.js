import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ContextProvider from "./componetFolder/Context/ContextApi";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
