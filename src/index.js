import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
