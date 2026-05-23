import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getExperiences } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import type { TimelineItemProps } from "../../types/types";
import { SubHeader } from "../generics/SubHeader";
import { Timeline } from "../generics/Timeline";

export function ExperienceSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiExperiences } = useApiData(getExperiences);

	const experienceHistory = useMemo<TimelineItemProps[]>(
		() =>
			apiExperiences.map((e) => ({
				img: e.logo ?? undefined,
				from: e.from[lang],
				to: e.to[lang],
				title: e.title[lang],
				subtitle: e.company[lang],
				description: e.description[lang],
				tags: e.tags,
			})),
		[apiExperiences, lang],
	);

	return (
		<div className="flex flex-col items-center">
			<SubHeader title={t("experienceSection.subheader")} />
			<Timeline timelineItems={experienceHistory} />
		</div>
	);
}
