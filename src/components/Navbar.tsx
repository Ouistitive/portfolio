import { MdOutlineLightMode } from "react-icons/md";
import type { NavbarSection } from "../types/NavbarSection";

export interface NavbarProps {
    navbarSections: NavbarSection[];
}

export function Navbar({ navbarSections }: NavbarProps) {
    const handleClick = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="bg-black flex justify-around items-center p-5 gap-4">
            <div>
                ST
            </div>

            <div className="flex gap-8">
                {navbarSections.map(section => (
                    <div className="cursor-pointer group transition duration-300" onClick={() => handleClick(section.link)}>
                        {section.title}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
                    </div>
                ))}
            </div>

            <div>
                <MdOutlineLightMode />
            </div>
        </section>
    )
}