import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { FaCloud, FaCode, FaServer } from "react-icons/fa";
import { MdSchema } from "react-icons/md";
import { TbAutomation } from "react-icons/tb";
import { getSkills } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import { SkillCard, type SkillCardProps } from "../business/SkillCard";
import { SubHeader } from "../generics/SubHeader";

const skillIconMap: Record<string, IconType> = {
	backend: FaServer,
	frontend: FaCode,
	web: FaServer,
	architecture: MdSchema,
	cloud: FaCloud,
	devops: TbAutomation,
};

export function SkillsSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiSkills } = useApiData(getSkills);

	const skills = useMemo<SkillCardProps[]>(
		() =>
			apiSkills.map((s) => ({
				Icon: skillIconMap[s.category] ?? FaServer,
				key: s.category,
				title: s.name[lang],
				description: s.description[lang],
				tags: s.tags,
			})),
		[apiSkills, lang],
	);

	return (
		<section className="mx-7 flex flex-col gap-15">
			<SubHeader title={t("skillsSection.subheader")} />
			<div className="flex flex-col gap-8 md:mx-60 md:grid md:grid-cols-3">
				{skills.map((skill, index) => (
					<div
						key={skill.key}
						className={
							index === skills.length - 1 && skills.length % 3 === 1
								? "md:col-start-2"
								: ""
						}
					>
						<SkillCard
							key={skill.title}
							Icon={skill.Icon}
							title={skill.title}
							description={skill.description}
							tags={skill.tags}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
