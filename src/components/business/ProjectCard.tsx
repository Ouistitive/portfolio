import { Card } from "../generics/Card";
import { GithubBadge } from "./GithubBadge";

interface ProjectCardProps {
    title: string
    description: string;

    viewGithub: boolean;
}

export function ProjectCard({ title, description, viewGithub }: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full gap-10">
            <div>
                <p className="text-2xl font-bold">{title}</p>
                <hr className="my-2" />
                <p>{description}</p>
            </div>

            <footer className="mt-auto flex">
                {viewGithub ? <GithubBadge /> : null}
            </footer>
        </Card>
    );
}
