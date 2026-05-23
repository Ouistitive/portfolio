import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { CTAButton } from "../business/CTAButton";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";
import { SubHeader } from "../generics/SubHeader";

export function HobbiesSection() {
	const { t } = useTranslation();
	const projects: ProjectCardProps[] = [
		{
			key: "project1",
			title: t("hobbiesSection.hobby1.title"),
			description: t("hobbiesSection.hobby1.description"),
			tags: t("hobbiesSection.hobby1.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			key: "project2",
			title: t("hobbiesSection.hobby2.title"),
			description: t("hobbiesSection.hobby2.description"),
			tags: t("hobbiesSection.hobby2.tags", {
				returnObjects: true,
			}) as string[],
		},
		{
			key: "project3",
			title: t("hobbiesSection.hobby3.title"),
			description: t("hobbiesSection.hobby3.description"),
			tags: t("hobbiesSection.hobby3.tags", {
				returnObjects: true,
			}) as string[],
		},
	];

	return (
		<section className="flex flex-col items-center gap-15">
			<SubHeader title={t("hobbiesSection.subheader")} />
			<aside className="mx-7 grid gap-8 md:mx-60 md:grid-cols-3">
				{projects.map((project) => {
					const { key, ...rest } = project;
					return <ProjectCard key={key} {...rest} />;
				})}
			</aside>

			<CTAButton Icon={FaUser} link={"/"} text={t("buttons.myCareer")} />
		</section>
	);
}
