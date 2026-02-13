import { useTranslation } from "react-i18next";
import BlackFridayPreview from "../../assets/projects/blackfriday.png";
import BobbyPreview from "../../assets/projects/bobby.png";
import { constants } from "../../utils/constants";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";
import { SubHeader } from "../generics/SubHeader";

export function ProjectsSection() {
	const { t } = useTranslation();
	const projects: ProjectCardProps[] = [
		{
			key: "project1",
			title: t("projectsSection.blackfridaySimulator.title"),
			description: t("projectsSection.blackfridaySimulator.description"),
			tags: t("projectsSection.blackfridaySimulator.tags", {
				returnObjects: true,
			}) as string[],
			preview: BlackFridayPreview,
			viewGithub: constants.BLACK_FRIDAY_LINK,
		},
		{
			key: "project2",
			title: t("projectsSection.bobby.title"),
			description: t("projectsSection.bobby.description"),
			tags: t("projectsSection.bobby.tags", {
				returnObjects: true,
			}) as string[],
			preview: BobbyPreview,
		},
		{
			key: "project3",
			title: t("projectsSection.kanamaster.title"),
			description: t("projectsSection.kanamaster.description"),
			tags: t("projectsSection.kanamaster.tags", {
				returnObjects: true,
			}) as string[],
			viewGithub: constants.KANA_MASTER_LINK,
		},
	];

	return (
		<section className="flex flex-col items-center gap-15">
			<SubHeader title={t("projectsSection.subheader")} />
			<aside className="mx-7 grid gap-8 md:mx-60 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard
						key={project.key}
						Icon={project.Icon}
						preview={project.preview}
						title={project.title}
						description={project.description}
						tags={project.tags}
						viewGithub={project.viewGithub}
					/>
				))}
			</aside>
		</section>
	);
}
