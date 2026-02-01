import { Navbar } from "../components/business/Navbar";
import type { NavbarSection } from "../types/NavbarSection";

export function ProjectsPage() {
	const navbarSections: NavbarSection[] = [
		{ title: "Compétences", link: "/skills" },
		{ title: "Projets", link: "/projects" },
		{ title: "Formations", link: "/school" },
		{ title: "Expérience", link: "/experience" },
		{ title: "À propos", link: "/about" },
		{ title: "Contact", link: "/contact" },
	];

	return (
		<div>
			<Navbar navbarSections={navbarSections} />
			Hi, I'm Steven Tea!
		</div>
	);
}
