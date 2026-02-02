import { FaCloud, FaCode, FaServer } from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";

export function SkillsSection() {
	const skills: SkillCardProps[] = [
		{
			Icon: FaServer,
			title: "Backend",
			description: "Conception d'API et logique métier",
			tags: [
				"Node.JS",
				"Java",
				"Go",
				"Python",
				"Express",
				"SpringBoot",
				"SAP CAP (CDS)",
			],
		},
		{
			Icon: FaCode,
			title: "Frontend",
			description: "Interfaces web modernes et performantes",
			tags: ["React", "TypeScript", "Tailwind CSS", "SAPUI5", "HTML", "CSS"],
		},
		{
			Icon: MdSchema,
			title: "Architecture applicative",
			description: "Conception et structuration d'applications",
			tags: ["Diagrammes UML", "Microservices", "Programmation orientée objet"],
		},
		{
			Icon: FaCloud,
			title: "Cloud",
			description: "",
			tags: ["SAP BTP", "SAP S4/HANA", "Azure Databricks", "AWS"],
		},
	];

	return (
		<section className="mx-60 grid grid-cols-3 gap-8">
			{skills.map((skill) => (
				<SkillCard key={skill.title} {...skill} />
			))}
		</section>
	);
}
