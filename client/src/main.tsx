import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from "./ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <div style={{ fontSize: "32px" }}>
          Something went wrong with this DS!
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
