import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
