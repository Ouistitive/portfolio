import { MdOutlineLightMode } from "react-icons/md";
import type { NavbarSection } from "../types/NavbarSection";

export interface NavbarProps {
	navbarSections: NavbarSection[];
}

export function Navbar({ navbarSections }: NavbarProps) {
	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="flex items-center justify-around gap-4 bg-black p-5">
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

			<div>
				<MdOutlineLightMode />
			</div>
		</section>
	);
}
