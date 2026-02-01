import { Navbar } from "../components/business/Navbar";
import { Title } from "../components/generics/Title";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { IntroductionSection } from "../components/sections/IntroductionSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SchoolSection } from "../components/sections/SchoolSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import type { NavbarSection } from "../types/NavbarSection";

export function HomePage() {
	const navbarSections: NavbarSection[] = [
		{ title: "Compétences", link: "/skills", Section: SkillsSection },
		{ title: "Projets", link: "/projects", Section: ProjectsSection },
		{ title: "Formations", link: "/school", Section: SchoolSection },
		{ title: "Expérience", link: "/experience", Section: ExperienceSection },
		{ title: "À propos", link: "/about" },
		{ title: "Contact", link: "/contact" },
	];

	return (
		<div className="bg-bg text-text">
			<Navbar navbarSections={navbarSections} />
			<IntroductionSection />

			{navbarSections.map((section, idx) => (
				<div
					key={section.link}
					className={`py-10 ${idx % 2 === 0 ? "bg-bg-surface" : "bg-bg"}`}
				>
					<Title key={section.link} title={section.title} />
					{section.Section ? <section.Section /> : null}
				</div>
			))}
		</div>
	);
}
