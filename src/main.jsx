import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { Analytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
