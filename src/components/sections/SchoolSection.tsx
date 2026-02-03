import { useTranslation } from "react-i18next";
import { IoSchool } from "react-icons/io5";
import type { TimelineItemProps } from "../../types/TimelineItem";
import { Timeline } from "../generics/Timeline";

export function SchoolSection() {
	const { t } = useTranslation();
	const schoolHistory: TimelineItemProps[] = [
		{
			from: new Date(),
			to: new Date(),
			title: t("schoolSection.utc.title"),
			subtitle: t("schoolSection.utc.school"),
			description: t("schoolSection.utc.description"),
		},
		{
			from: new Date(),
			to: new Date(),
			title: t("schoolSection.iut.title"),
			subtitle: t("schoolSection.iut.school"),
			description: t("schoolSection.iut.description"),
		},
		{
			from: new Date(),
			to: new Date(),
			title: t("schoolSection.bac.title"),
			subtitle: t("schoolSection.bac.school"),
			description: t("schoolSection.bac.description"),
		},
	];

	return <Timeline Icon={IoSchool} timelineItems={schoolHistory} />;
}
