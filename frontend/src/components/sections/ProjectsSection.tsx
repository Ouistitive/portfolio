import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getProjects } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";
import { SubHeader } from "../generics/SubHeader";

export function ProjectsSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiProjects } = useApiData(getProjects);

	const projects = useMemo<ProjectCardProps[]>(
		() =>
			apiProjects.map((p) => ({
				key: p.id,
				title: p.title[lang],
				description: p.description[lang],
				tags: p.tags,
				preview: p.previewImage ?? undefined,
				viewGithub: p.githubLink ?? undefined,
			})),
		[apiProjects, lang],
	);

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
