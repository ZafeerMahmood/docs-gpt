import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@css/index.css";
import Layout from "@/layout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "@/Error.tsx";
import { logError } from "@utils/logging.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => window.location.reload()}
        onError={(error, info) => logError(error, info)}
      >
        <App />
      </ErrorBoundary>
    </Layout>
  </React.StrictMode>
);
