import type { TimelineItemProps } from "../../types/TimelineItem";
import { Timeline } from "../generics/Timeline";

export function SchoolSection() {
	const schoolHistory: TimelineItemProps[] = [
		{
			from: new Date(),
			to: new Date(),
			title:
				"Diplôme d'ingénieur — Génie informatique filière Infrastructure et Système d'information",
			subtitle: "Université de Technologie de Compiègne",
			description: "Université de technologie de Compiègne",
		},
		{
			from: new Date(),
			to: new Date(),
			title:
				"BUT Informatique — Réalisation d'applications : conception, développement, validation",
			subtitle: "IUT de Paris Cité",
			description: "IUT de Paris Cité",
		},
		{
			from: new Date(),
			to: new Date(),
			title: "Baccalauréat générale — Spécialités Informatique et Mathématique",
			subtitle: "Lycée Rosa Parks",
			description: "IUT de Paris Cité",
		},
	];

	return <Timeline timelineItems={schoolHistory} />;
}
