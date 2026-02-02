import type { IconType } from "react-icons";
import { Badge } from "../generics/Badge";
import { Card } from "../generics/Card";

export interface SkillCardProps {
	Icon: IconType;
	title: string;
	description: string;
	tags: string[];
}

export function SkillCard({ Icon, title, description, tags }: SkillCardProps) {
	return (
		<Card className="flex flex-col gap-3">
			<div className="flex items-center gap-4">
				<Icon size={30} />
				<p className="font-bold text-xl">{title}</p>
			</div>
			<p>{description}</p>
			<footer className="mt-auto">
				<hr className="bg-border" />
				<div className="mt-3 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge key={tag} title={tag} />
					))}
				</div>
			</footer>
			<div className="flex flex-wrap gap-2"></div>
		</Card>
	);
}
