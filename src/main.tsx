import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TokenStore from "./Services/TokenStore.tsx";
import { Provider as TokenProvider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokenProvider store={TokenStore}>
      <App />
    </TokenProvider>
  </StrictMode>
);
