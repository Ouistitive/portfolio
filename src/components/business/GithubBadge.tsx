import { FaGithub } from "react-icons/fa";

export function GithubBadge() {
    return (
        <button className="border rounded-lg p-2 flex gap-3 items-center cursor-pointer">
            <FaGithub size={20} />
            <p>View on Github</p>
        </button>
    );
}