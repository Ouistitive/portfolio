import { Badge } from "../generics/Badge";
import { Card } from "../generics/Card";
import { GithubBadge } from "./GithubBadge";

export interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	preview?: string;

	viewGithub: boolean;
}

export function ProjectCard({
	title,
	description,
	tags,
	viewGithub,
}: ProjectCardProps) {
	return (
		<Card className="flex h-full flex-col gap-10">
			<div>
				<p className="font-bold text-2xl">{title}</p>
				<hr className="my-2 text-border" />
				<p className="whitespace-pre-line">{description}</p>
			</div>

			<footer className="mt-auto flex flex-col flex-wrap gap-3">
				<div className="flex gap-2">
					{tags.map((tag) => (
						<Badge key={tag} title={tag} />
					))}
				</div>
				{viewGithub ? <GithubBadge /> : null}
			</footer>
		</Card>
	);
}
