import type { ComponentType } from "react";
import type { IconType } from "react-icons";

export type LanguageAvailable = "FR" | "EN";

export interface NavbarSection {
	title: string;
	link: string;
	Section?: ComponentType;
}

export interface TimelineItemProps {
	Icon?: IconType;
	img?: string;
	from: string;
	to: string;
	title: string;
	subtitle: string;
	description: string;
	tags?: string[];
}
