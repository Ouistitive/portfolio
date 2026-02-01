import type { TimelineItemProps } from "../../types/TimelineItem";
import { Timeline } from "../generics/Timeline";

export function ExperienceSection() {
	const schoolHistory: TimelineItemProps[] = [
		{
			from: new Date(),
			to: new Date(),
			title: "Alternant ingénieur Cloud & Software",
			subtitle: "SAP France",
			description: "Université de technologie de Compiègne",
		},
		{
			from: new Date(),
			to: new Date(),
			title: "Stagiaire développeur Cloud Full-Stack",
			subtitle: "IZHO",
			description: "IUT de Paris Cité",
		},
		{
			from: new Date(),
			to: new Date(),
			title: "Stagiaire développeur web et mobile",
			subtitle: "SIMPLOS",
			description: "IUT de Paris Cité",
		},
	];

	return <Timeline timelineItems={schoolHistory} />;
}
