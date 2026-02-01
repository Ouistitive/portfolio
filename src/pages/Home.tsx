import { Navbar } from "../components/Navbar";
import { Title } from "../components/Title";
import type { NavbarSection } from "../types/NavbarSection";

export function HomePage() {
    const navbarSections: NavbarSection[] = [
        { title: "Compétences", link: "/skills" },
        { title: "Projets", link: "/projects" },
        { title: "Formations", link: "/school" },
        { title: "Expérience", link: "/experience" },
        { title: "À propos", link: "/about" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <div className="bg-bg">
            <Navbar navbarSections={navbarSections} />
            Hi, I'm Steven Tea!

            {navbarSections.map(section => (
                <Title title={section.title} />
            ))}
        </div>
    )
}