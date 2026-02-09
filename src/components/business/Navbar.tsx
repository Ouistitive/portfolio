import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { NavbarSection } from "../../types/types";
import { LanguageOptions } from "./LanguageOptions";
import { ThemeToggle } from "./ThemeToggle";

export interface NavbarProps {
	navbarSections: NavbarSection[];
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
		<nav
			className={`fixed top-0 left-0 z-50 flex w-full items-center gap-4 p-5 transition-all duration-300 ${isScrolled ? "bg-bg/40 backdrop-blur-md" : "bg-transparent"}`}
		>
			<Link to="/about">
				<div className="flex cursor-pointer items-center rounded-4xl border border-border px-2.5 py-2">
					<div>ST</div>
				</div>
			</Link>

			<div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-8">
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

			<div className="ml-auto flex items-center gap-5">
				<LanguageOptions />
				<ThemeToggle />
			</div>
		</nav>
	);
}
