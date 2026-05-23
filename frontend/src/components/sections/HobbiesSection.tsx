import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { getHobbies } from "../../api/portfolio";
import { useApiData } from "../../hooks/useApiData";
import { CTAButton } from "../business/CTAButton";
import { ProjectCard, type ProjectCardProps } from "../business/ProjectCard";
import { SubHeader } from "../generics/SubHeader";

export function HobbiesSection() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language as "en" | "fr";
	const { data: apiHobbies } = useApiData(getHobbies);

	const projects = useMemo<ProjectCardProps[]>(
		() =>
			apiHobbies.map((h) => ({
				key: h.id,
				title: h.title[lang],
				description: h.description[lang],
				tags: h.tags,
			})),
		[apiHobbies, lang],
	);

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
