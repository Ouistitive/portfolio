import { FaCode } from "react-icons/fa";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";

export function SkillsSection() {
	const skills: SkillCardProps[] = [
		{
			Icon: FaCode,
			title: "Développement backend",
			description: "Dev",
			tags: ["Node.JS", "Java SpringBoot", "Go", "SAP CAP CDS", "Python"],
		},
		{
			Icon: FaCode,
			title: "Développement frontend",
			description: "Dev",
			tags: ["React", "Typescript", "Tailwind", "SAPUI5"],
		},
	];

	return (
		<section className="mx-60 grid grid-cols-3 gap-8">
			{skills.map(({ title, description, tags }: SkillCardProps) => (
				<SkillCard
					key={title}
					Icon={FaCode}
					title={title}
					description={description}
					tags={tags}
				/>
			))}
		</section>
	);
}
