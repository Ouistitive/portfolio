import { useTranslation } from "react-i18next";
import { FaCloud, FaCode, FaServer } from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";

export function SkillsSection() {
	const { t } = useTranslation();
	const skills: SkillCardProps[] = [
		{
			Icon: FaServer,
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
			title: t("skillsSection.frontend.title"),
			description: t("skillsSection.frontend.description"),
			tags: ["React", "TypeScript", "Tailwind CSS", "SAPUI5", "HTML", "CSS"],
		},
		{
			Icon: MdSchema,
			title: t("skillsSection.architecture.title"),
			description: t("skillsSection.architecture.description"),
			tags: ["Diagrammes UML", "Programmation orientée objet"],
		},
		{
			Icon: FaCloud,
			title: t("skillsSection.architecture.title"),
			description: t("skillsSection.cloud.description"),
			tags: ["SAP BTP"],
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
