import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

export function GithubBadge() {
	const { t } = useTranslation();

	return (
		<button
			type="button"
			className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-border bg-bg-tags p-2"
		>
			<FaGithub size={20} />
			<p>{t("buttons.github")}</p>
		</button>
	);
}
