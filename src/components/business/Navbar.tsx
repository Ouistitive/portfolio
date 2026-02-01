import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";
import type { NavbarSection } from "../../types/NavbarSection";

export interface NavbarProps {
	navbarSections: NavbarSection[];
}

function ThemeToggle() {
	const [theme, setTheme] = useTheme();
	const [animate, setAnimate] = useState(false);

	const handleClick = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="relative flex items-center justify-center">
			<button
				type="button"
				onClick={handleClick}
				className="z-10 cursor-pointer rounded bg-bg px-4 py-2"
			>
				{theme === "dark" ? (
					<MdOutlineLightMode size={20} />
				) : (
					<MdOutlineDarkMode size={20} />
				)}
			</button>

			{animate && (
				<div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
					<div
						className={`circle-expand ${
							theme === "dark"
								? "bg-[rgba(243,244,246,0.2)]"
								: "bg-[rgba(59,130,246,0.2)]"
						}`}
					/>
				</div>
			)}
		</div>
	);
}

export function Navbar({ navbarSections }: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 z-50 flex w-full items-center justify-around gap-4 p-5 transition-all duration-300 ${isScrolled ? "bg-bg/40 backdrop-blur-md" : "bg-transparent"}`}
		>
			<div>ST</div>
			<div className="flex gap-8">
				{navbarSections.map((section) => (
					<button
						key={section.link}
						type="button"
						className="group cursor-pointer transition duration-300"
						onClick={() => handleClick(section.link)}
					>
						{section.title}
						<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
					</button>
				))}
			</div>

			<ThemeToggle />
		</header>
	);
}
