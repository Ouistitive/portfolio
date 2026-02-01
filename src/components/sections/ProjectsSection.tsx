import { ProjectCard } from "../business/ProjectCard";

export function ProjectsSection() {
    return (
        <section className="flex flex-col items-center gap-15">
            <p>Here's my recent projects!</p>
            <aside className="mx-60 grid grid-cols-2 gap-8">
                <ProjectCard title="hello" description="lorem ipsum" viewGithub={true} />
                <ProjectCard title="hello" description="lorem ipsum aizueaieuhaz aiu ehaziuehaz ai uhazieuhaz eiuazh eiazueh izau ehaziuehaziuehazhnzakjnakjbnzakej zakb akzb zkaebh ab" viewGithub={true} />
                <ProjectCard title="hello" description="lorem ipsum" viewGithub={false} />
                <ProjectCard title="hello" description="lorem ipsum" viewGithub={true} />
            </aside>
        </section>
    );
}