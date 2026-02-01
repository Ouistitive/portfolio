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
			<div className="flex items-center gap-3">
				<Icon size={30} />
				<p className="font-bold text-xl">{title}</p>
			</div>
			<p>{description}</p>
			<hr className="bg-border" />
			<div className="flex gap-2">
				{tags.map((tag) => (
					<Badge key={tag} title={tag} />
				))}
			</div>
		</Card>
	);
}
