import BlackFridayPreview from "../../assets/blackfriday.png";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";

export function ProjectsSection() {
	const projects: ProjectCardProps[] = [
		{
			title: "Simulation de Black Friday",
			description:
				"Simulation en Go visant à modéliser les mouvements de foule lors du Black Friday afin d'identifier l'agencement de magasin optimal permettant aux agents de parcourir l'ensemble de l'espace.\n\nLe système repose sur plusieurs types d’agents : des clients classiques, des clients égoïstes pouvant voler d’autres agents, et des agents de sécurité chargés de réduire le taux de vol dans leur champ de vision",
			tags: ["Système multi-agents", "Go", "Gestion de la concurrence"],
			preview: BlackFridayPreview,
			viewGithub: true,
		},
		{
			title: "Gestion des inventaires des associations de l'UTC",
			description:
				"Application web de gestion des objets des associations de l'UTC en Laravel et React. L'application permet aux associations de visualiser leur inventaire et faire des demandes d'emprunts d'objets à d'autres associations.",
			tags: ["PHP / Laravel", "React / Typescript", ""],
			viewGithub: true,
		},
		{
			title: "KanaMaster",
			description:
				"Application mobile de quiz en Java pour apprendre les principaux caractères japonais.",
			tags: ["Java", "Android Studio"],
			viewGithub: true,
		},
	];

	return (
		<section className="flex flex-col items-center gap-15">
			<p>Here's my recent projects!</p>
			<aside className="mx-60 grid grid-cols-2 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</aside>
		</section>
	);
}
