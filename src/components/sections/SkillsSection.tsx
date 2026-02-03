import { useTranslation } from "react-i18next";
import { FaCloud, FaCode, FaServer } from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";

export function SkillsSection() {
	const { t } = useTranslation();
	const skills: SkillCardProps[] = [
		{
			Icon: FaServer,
			key: "backend",
			title: t("skillsSection.backend.title"),
			description: t("skillsSection.backend.description"),
			tags: [
				"Node.JS",
				"Java",
				"Go",
				"Express",
				"SAP CAP (CDS)",
				"SpringBoot",
				"Python",
			],
		},
		{
			Icon: FaCode,
			key: "frontend",
			title: t("skillsSection.frontend.title"),
			description: t("skillsSection.frontend.description"),
			tags: ["React", "TypeScript", "Tailwind CSS", "SAPUI5", "HTML", "CSS"],
		},
		{
			Icon: MdSchema,
			key: "architecture",
			title: t("skillsSection.architecture.title"),
			description: t("skillsSection.architecture.description"),
			tags: ["Diagrammes UML", "Programmation orientée objet"],
		},
		{
			Icon: FaCloud,
			key: "cloud",
			title: t("skillsSection.cloud.title"),
			description: t("skillsSection.cloud.description"),
			tags: ["SAP BTP"],
		},
	];

	return (
		<section className="mx-60 grid grid-cols-3 gap-8">
			{skills.map((skill) => (
				<SkillCard key={skill.key} {...skill} />
			))}
		</section>
	);
}
