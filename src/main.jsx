import { StrictMode } from "react";
import {
  createRoot,
  BrowserRouter,
} from "../node_modules/.vite/deps/react-dom_client.js";
import App from "./App.jsx";
import "./global.css";
import { ScrollToTop } from "./utils/scrollToTop";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
