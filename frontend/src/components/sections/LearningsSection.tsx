import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaAws, FaBrain, FaLanguage } from "react-icons/fa";
import type { IconType } from "react-icons";
import { getLearnings } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";
import { SubHeader } from "../generics/SubHeader";

const learningIcons: IconType[] = [FaAws, FaBrain, FaLanguage];

export function LearningsSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiLearnings } = useApiData(getLearnings);

	const skills = useMemo<SkillCardProps[]>(
		() =>
			apiLearnings.map((l, idx) => ({
				Icon: learningIcons[idx] ?? FaAws,
				key: l.id,
				title: l.name[lang],
				description: l.description[lang],
				tags: l.tags,
			})),
		[apiLearnings, lang],
	);

	return (
		<section className="mx-7 flex flex-col gap-15">
			<SubHeader title={t("learningsSection.subheader")} />
			<div className="flex flex-col gap-8 md:mx-60 md:grid md:grid-cols-2">
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
