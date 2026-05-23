import { useTranslation } from "react-i18next";
import { Navbar } from "../components/business/Navbar";
import { Title } from "../components/generics/Title";
import { AboutMeSection } from "../components/sections/AboutMeSection";
import { HobbiesSection } from "../components/sections/HobbiesSection";
import { LearningsSection } from "../components/sections/LearningsSection";
import type { NavbarSection } from "../types/types";

export function AboutMePage() {
	const { t } = useTranslation();
	const navbarSections: NavbarSection[] = [
		{
			title: t("navbar.learnings"),
			link: "#learnings",
			Section: LearningsSection,
		},
		{ title: t("navbar.hobbies"), link: "#hobbies", Section: HobbiesSection },
	];

	return (
		<div className="bg-bg text-text">
			<Navbar linkProfile="/" navbarSections={navbarSections} />
			<AboutMeSection />

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
