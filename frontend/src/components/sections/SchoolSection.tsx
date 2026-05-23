import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IoSchool } from "react-icons/io5";
import { getSchools } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import type { TimelineItemProps } from "../../types/types";
import { SubHeader } from "../generics/SubHeader";
import { Timeline } from "../generics/Timeline";

export function SchoolSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiSchools } = useApiData(getSchools);

	const schoolHistory = useMemo<TimelineItemProps[]>(
		() =>
			apiSchools.map((s) => ({
				img: s.logo ?? undefined,
				Icon: s.logo ? undefined : IoSchool,
				from: s.from[lang],
				to: s.to[lang],
				title: s.title[lang],
				subtitle: s.school[lang],
				description: s.description[lang],
				tags: s.tags,
			})),
		[apiSchools, lang],
	);

	return (
		<div className="flex flex-col items-center">
			<SubHeader title={t("schoolSection.subheader")} />
			<Timeline timelineItems={schoolHistory} />
		</div>
	);
}
