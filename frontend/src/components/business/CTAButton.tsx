import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { navigateToAnchor } from "../../utils/navigation";

interface CTAButtonProps {
	Icon: IconType;
	text: string;
	anchorNav?: string;
	link?: string;
	className?: string;
}

export function CTAButton({
	Icon,
	text,
	anchorNav,
	link,
	className,
}: CTAButtonProps) {
	const navigate = useNavigate();
	const buttonClasses = `flex items-center gap-3 rounded-md border border-border bg-text px-5 py-3 text-bg-surface cursor-pointer ${className}`;

	if (link) {
		return (
			<button
				type="button"
				className={buttonClasses}
				onClick={() => {
					navigate(link);
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
			>
				<Icon size={20} />
				{text}
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={() => anchorNav && navigateToAnchor(anchorNav)}
			className={buttonClasses}
		>
			<Icon size={20} />
			{text}
		</button>
	);
}
