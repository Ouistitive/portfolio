import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";
import { CTAButton } from "../business/CTAButton";

export function AboutMeSection() {
	const { t } = useTranslation();

	return (
		<section className="relative flex h-screen flex-col items-center justify-center gap-7 bg-bg-surface">
			<p className="text-center text-3xl md:text-7xl">
				{t("aboutMeSection.welcome")}
			</p>

			<p className="p-5 text-center text-text-subtitle text-xl md:px-120">
				{t("aboutMeSection.description")}
			</p>

			<CTAButton
				Icon={FaArrowDown}
				className="mt-5"
				anchorNav="#learnings"
				text={t("buttons.seeMore")}
			/>
			<span className="absolute bottom-6 animate-bounce text-3xl">
				<FaArrowDown />
			</span>
		</section>
	);
}
