import { FaGithub } from "react-icons/fa";

export function GithubBadge() {
	return (
		<button
			type="button"
			className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-bg-tags p-2"
		>
			<FaGithub size={20} />
			<p>View on Github</p>
		</button>
	);
}
