import { Card } from "../generics/Card";
import { GithubBadge } from "./GithubBadge";

interface ProjectCardProps {
	title: string;
	description: string;

	viewGithub: boolean;
}

export function ProjectCard({
	title,
	description,
	viewGithub,
}: ProjectCardProps) {
	return (
		<Card className="flex h-full flex-col gap-10">
			<div>
				<p className="font-bold text-2xl">{title}</p>
				<hr className="my-2 text-border" />
				<p>{description}</p>
			</div>

			<footer className="mt-auto flex">
				{viewGithub ? <GithubBadge /> : null}
			</footer>
		</Card>
	);
}
