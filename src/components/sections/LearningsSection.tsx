import { useTranslation } from "react-i18next";
import { FaAws, FaBrain, FaLanguage } from "react-icons/fa";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";
import { SubHeader } from "../generics/SubHeader";

export function LearningsSection() {
	const { t } = useTranslation();
	const skills: SkillCardProps[] = [
		{
			Icon: FaAws,
			key: "backend",
			title: t("learningsSection.learning1.title"),
			description: t("learningsSection.learning1.description"),
			tags: [],
		},
		{
			Icon: FaBrain,
			key: "frontend",
			title: t("learningsSection.learning2.title"),
			description: t("learningsSection.learning2.description"),
			tags: [],
		},
		{
			Icon: FaLanguage,
			key: "architecture",
			title: t("learningsSection.learning3.title"),
			description: t("learningsSection.learning3.description"),
			tags: [],
		},
	];

	return (
		<section className="mx-7 flex flex-col gap-15">
			<SubHeader title={t("learningsSection.subheader")} />
			<div className="flex flex-col gap-8 md:mx-60 md:grid md:grid-cols-3">
				{skills.map((skill) => (
					<SkillCard
						key={skill.key}
						Icon={skill.Icon}
						title={skill.title}
						description={skill.description}
						tags={skill.tags}
					/>
				))}
			</div>
		</section>
	);
}
