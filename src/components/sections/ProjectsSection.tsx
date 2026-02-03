import { useTranslation } from "react-i18next";
import BlackFridayPreview from "../../assets/blackfriday.png";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";

export function ProjectsSection() {
	const { t } = useTranslation();
	const projects: ProjectCardProps[] = [
		{
			title: t("projectsSection.blackfridaySimulator.title"),
			description: t("projectsSection.blackfridaySimulator.description"),
			tags: [
				"Système multi-agents",
				"Go / Ebiten",
				"Gestion de la concurrence",
			],
			preview: BlackFridayPreview,
			viewGithub: true,
		},
		{
			title: t("projectsSection.bobby.title"),
			description: t("projectsSection.bobby.description"),
			tags: ["PHP / Laravel", "React / Typescript"],
			viewGithub: true,
		},
		{
			title: t("projectsSection.kanamaster.title"),
			description: t("projectsSection.kanamaster.description"),
			tags: ["Java", "Android Studio"],
			viewGithub: true,
		},
	];

	return (
		<section className="flex flex-col items-center gap-15">
			<p>{t("projectsSection.subheader")}</p>
			<aside className="mx-60 grid grid-cols-2 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</aside>
		</section>
	);
}
