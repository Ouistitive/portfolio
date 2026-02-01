import type { ComponentType } from "react";

export interface NavbarSection {
    title: string;
    link: string;
    Section?: ComponentType;
}