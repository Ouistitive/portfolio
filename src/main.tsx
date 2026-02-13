import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "../i18n";
import "./styles/App.css";
import { UseScrollTop } from "./hooks/useScrollTop.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter basename="/portfolio/">
			<UseScrollTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
