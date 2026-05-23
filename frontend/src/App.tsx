import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutMePage } from "./pages/AboutMe";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutMePage />} />
		</Routes>
	);
}

export default App;
