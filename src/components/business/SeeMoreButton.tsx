import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";
import { navigateToAnchor } from "../../utils/navigation";

interface SeeMoreButtonProps {
	className?: string;
	anchorNav: string;
}

export function SeeMoreButton({ className, anchorNav }: SeeMoreButtonProps) {
	const { t } = useTranslation();

	return (
		<button
			type="button"
			onClick={() => navigateToAnchor(anchorNav)}
			className={`flex cursor-pointer items-center gap-3 rounded-md border border-border bg-text px-5 py-3 text-bg-surface ${className}`}
		>
			<FaArrowDown size={20} />
			{t("buttons.seeMore")}
		</button>
	);
}
