import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
	const [theme, setTheme] = useTheme();

	const handleClick = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="relative flex items-center justify-center">
			<button
				type="button"
				onClick={handleClick}
				className="z-10 cursor-pointer rounded bg-bg-surface px-4 py-2"
			>
				{theme === "dark" ? (
					<MdOutlineLightMode size={20} />
				) : (
					<MdOutlineDarkMode size={20} />
				)}
			</button>
		</div>
	);
}
