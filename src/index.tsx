import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ViewportProvider } from './components/shared/ViewportContext/useViewport';

ReactDOM.render(
  <ViewportProvider>
      <App />
  </ViewportProvider>,
  document.getElementById("root")
);
