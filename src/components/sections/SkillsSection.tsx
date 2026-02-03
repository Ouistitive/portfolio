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
			tags: t("skillsSection.backend.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			Icon: FaCode,
			key: "frontend",
			title: t("skillsSection.frontend.title"),
			description: t("skillsSection.frontend.description"),
			tags: t("skillsSection.frontend.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			Icon: MdSchema,
			key: "architecture",
			title: t("skillsSection.architecture.title"),
			description: t("skillsSection.architecture.description"),
			tags: t("skillsSection.architecture.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			Icon: FaCloud,
			key: "cloud",
			title: t("skillsSection.cloud.title"),
			description: t("skillsSection.cloud.description"),
			tags: t("skillsSection.cloud.tags", { returnObjects: true }) as string[],
		},
	];

	return (
		<section className="mx-60 grid grid-cols-3 gap-8">
			{skills.map((skill) => (
				<SkillCard
					key={skill.key}
					Icon={skill.Icon}
					title={skill.title}
					description={skill.description}
					tags={skill.tags}
				/>
			))}
		</section>
	);
}
