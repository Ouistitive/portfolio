import { useEffect, useState } from "react";
import type { NavbarSection } from "../../types/NavbarSection";
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
