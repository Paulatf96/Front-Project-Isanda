import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GeneralContextProvider } from "./context/GeneralContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </StrictMode>
);
