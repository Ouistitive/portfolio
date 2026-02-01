import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState(() => {
		if (localStorage.theme) return localStorage.theme;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.theme = theme;
	}, [theme]);

	return [theme, setTheme];
}
