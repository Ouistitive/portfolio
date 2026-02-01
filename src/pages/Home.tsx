import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { Title } from "../components/Title";
import type { NavbarSection } from "../types/NavbarSection";

export function HomePage() {
    const navbarSections: NavbarSection[] = [
        { title: "Compétences", link: "/skills", Section: SkillsSection },
        { title: "Projets", link: "/projects", Section: ProjectsSection },
        { title: "Formations", link: "/school" },
        { title: "Expérience", link: "/experience" },
        { title: "À propos", link: "/about" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <div className="bg-bg text-text">
            <Navbar navbarSections={navbarSections} />
            Hi, I'm Steven Tea!

            {navbarSections.map(section => (
                <div>
                    <Title key={section.link} title={section.title} />
                    {section.Section ? <section.Section /> : null}
                </div>
            ))}
        </div>
    )
}