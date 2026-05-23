import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function UseScrollTop() {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: To rescroll to the top at each link changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
