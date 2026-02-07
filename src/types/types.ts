import type { ComponentType } from "react";

export type LanguageAvailable = "FR" | "EN";

export interface NavbarSection {
	title: string;
	link: string;
	Section?: ComponentType;
}

export interface TimelineItemProps {
	from: string;
	to: string;
	title: string;
	subtitle: string;
	description: string;
}
