import { useTranslation } from "react-i18next";
import { Navbar } from "../components/business/Navbar";
import { Title } from "../components/generics/Title";
import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { IntroductionSection } from "../components/sections/IntroductionSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SchoolSection } from "../components/sections/SchoolSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import type { NavbarSection } from "../types/types";

export function HomePage() {
	const { t } = useTranslation();
	const navbarSections: NavbarSection[] = [
		{ title: t("navbar.skills"), link: "#skills", Section: SkillsSection },
		{
			title: t("navbar.projects"),
			link: "#projects",
			Section: ProjectsSection,
		},
		{
			title: t("navbar.experience"),
			link: "#experience",
			Section: ExperienceSection,
		},
		{ title: t("navbar.school"), link: "#school", Section: SchoolSection },
		{ title: t("navbar.contact"), link: "#contact", Section: ContactSection },
	];

	return (
		<div className="bg-bg text-text">
			<Navbar linkProfile="/about" navbarSections={navbarSections} />
			<IntroductionSection />

			{navbarSections.map((section, idx) => (
				<div
					key={section.link}
					id={section.link}
					className={`pt-10 pb-19 ${idx % 2 === 0 ? "bg-bg" : "bg-bg-surface"}`}
				>
					<Title key={section.link} title={section.title} />
					{section.Section ? <section.Section /> : null}
				</div>
			))}
		</div>
	);
}
