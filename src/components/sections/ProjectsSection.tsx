import { useTranslation } from "react-i18next";
import BlackFridayPreview from "../../assets/blackfriday.png";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";
import { SubHeader } from "../generics/SubHeader";

export function ProjectsSection() {
	const { t } = useTranslation();
	const projects: ProjectCardProps[] = [
		{
			title: t("projectsSection.blackfridaySimulator.title"),
			description: t("projectsSection.blackfridaySimulator.description"),
			tags: t("projectsSection.blackfridaySimulator.tags", {
				returnObjects: true,
			}) as string[],
			preview: BlackFridayPreview,
			viewGithub: true,
		},
		{
			title: t("projectsSection.bobby.title"),
			description: t("projectsSection.bobby.description"),
			tags: t("projectsSection.bobby.tags", {
				returnObjects: true,
			}) as string[],
			viewGithub: true,
		},
		{
			title: t("projectsSection.kanamaster.title"),
			description: t("projectsSection.kanamaster.description"),
			tags: t("projectsSection.kanamaster.tags", {
				returnObjects: true,
			}) as string[],
			viewGithub: true,
		},
	];

	return (
		<section className="flex flex-col items-center gap-15">
			<SubHeader title={t("projectsSection.subheader")} />
			<aside className="mx-60 grid grid-cols-2 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</aside>
		</section>
	);
}
