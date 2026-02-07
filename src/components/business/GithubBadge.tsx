import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

interface GithubBadgeProps {
	link: string;
}

export function GithubBadge({ link }: GithubBadgeProps) {
	const { t } = useTranslation();

	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<button
				type="button"
				className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-border bg-bg-tags p-2"
			>
				<FaGithub size={20} />
				<p>{t("buttons.github")}</p>
			</button>
		</a>
	);
}
