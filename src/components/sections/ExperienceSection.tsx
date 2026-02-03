import { useTranslation } from "react-i18next";
import type { TimelineItemProps } from "../../types/TimelineItem";
import { SubHeader } from "../generics/SubHeader";
import { Timeline } from "../generics/Timeline";

export function ExperienceSection() {
	const { t } = useTranslation();
	const experienceHistory: TimelineItemProps[] = [
		{
			from: new Date(),
			to: new Date(),
			title: t("experienceSection.apprenticeshipSAP.title"),
			subtitle: t("experienceSection.apprenticeshipSAP.company"),
			description: t("experienceSection.apprenticeshipSAP.description"),
		},
		{
			from: new Date(),
			to: new Date(),
			title: t("experienceSection.internshipIZHO.title"),
			subtitle: t("experienceSection.internshipIZHO.company"),
			description: t("experienceSection.internshipIZHO.description"),
		},
		{
			from: new Date(),
			to: new Date(),
			title: t("experienceSection.internshipSIMPLOS.title"),
			subtitle: t("experienceSection.internshipSIMPLOS.company"),
			description: t("experienceSection.internshipSIMPLOS.description"),
		},
	];

	return (
		<div className="flex flex-col items-center">
			<SubHeader title={t("experienceSection.subheader")} />
			<Timeline timelineItems={experienceHistory} />
		</div>
	);
}
