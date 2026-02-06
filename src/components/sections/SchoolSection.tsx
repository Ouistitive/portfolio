import { useTranslation } from "react-i18next";
import { IoSchool } from "react-icons/io5";
import type { TimelineItemProps } from "../../types/TimelineItem";
import { SubHeader } from "../generics/SubHeader";
import { Timeline } from "../generics/Timeline";

export function SchoolSection() {
	const { t } = useTranslation();
	const schoolHistory: TimelineItemProps[] = [
		{
			from: t("schoolSection.utc.from"),
			to: t("schoolSection.utc.to"),
			title: t("schoolSection.utc.title"),
			subtitle: t("schoolSection.utc.school"),
			description: t("schoolSection.utc.description"),
		},
		{
			from: t("schoolSection.iut.from"),
			to: t("schoolSection.iut.to"),
			title: t("schoolSection.iut.title"),
			subtitle: t("schoolSection.iut.school"),
			description: t("schoolSection.iut.description"),
		},
		{
			from: t("schoolSection.bac.from"),
			to: t("schoolSection.bac.to"),
			title: t("schoolSection.bac.title"),
			subtitle: t("schoolSection.bac.school"),
			description: t("schoolSection.bac.description"),
		},
	];

	return (
		<div className="flex flex-col items-center">
			<SubHeader title={t("schoolSection.subheader")} />
			<Timeline Icon={IoSchool} timelineItems={schoolHistory} />
		</div>
	);
}
