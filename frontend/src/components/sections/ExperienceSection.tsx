import { useTranslation } from "react-i18next";
import IZHOLogo from "../../assets/enterprises/IZHO.jpg";
import SAPLogo from "../../assets/enterprises/SAP.png";
import SIMPLOSLogo from "../../assets/enterprises/SIMPLOS.jpg";
import type { TimelineItemProps } from "../../types/types";
import { SubHeader } from "../generics/SubHeader";
import { Timeline } from "../generics/Timeline";

export function ExperienceSection() {
	const { t } = useTranslation();
	const experienceHistory: TimelineItemProps[] = [
		{
			img: SAPLogo,
			from: t("experienceSection.apprenticeshipSAP.from"),
			to: t("experienceSection.apprenticeshipSAP.to"),
			title: t("experienceSection.apprenticeshipSAP.title"),
			subtitle: t("experienceSection.apprenticeshipSAP.company"),
			description: t("experienceSection.apprenticeshipSAP.description"),
			tags: t("experienceSection.apprenticeshipSAP.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			img: IZHOLogo,
			from: t("experienceSection.internshipIZHO.from"),
			to: t("experienceSection.internshipIZHO.to"),
			title: t("experienceSection.internshipIZHO.title"),
			subtitle: t("experienceSection.internshipIZHO.company"),
			description: t("experienceSection.internshipIZHO.description"),
			tags: t("experienceSection.internshipIZHO.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			img: SIMPLOSLogo,
			from: t("experienceSection.internshipSIMPLOS.from"),
			to: t("experienceSection.internshipSIMPLOS.to"),
			title: t("experienceSection.internshipSIMPLOS.title"),
			subtitle: t("experienceSection.internshipSIMPLOS.company"),
			description: t("experienceSection.internshipSIMPLOS.description"),
			tags: t("experienceSection.internshipSIMPLOS.tags", {
				returnObjects: true,
			}) as string[],
		},
	];

	return (
		<div className="flex flex-col items-center">
			<SubHeader title={t("experienceSection.subheader")} />
			<Timeline timelineItems={experienceHistory} />
		</div>
	);
}
