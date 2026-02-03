import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.css";
import { HomePage } from "./pages/Home.tsx";

import '../i18n';

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
);
