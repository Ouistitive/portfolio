import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";
import { CTAButton } from "../business/CTAButton";

export function IntroductionSection() {
	const { t } = useTranslation();

	return (
		<section className="relative flex h-screen flex-col items-center justify-center gap-7 bg-bg-surface">
			<p className="text-center text-3xl md:text-7xl">
				{t("introductionSection.welcome")}
			</p>
			<p className="text-center font-bold text-2xl text-text-subtitle md:text-4xl">
				{t("introductionSection.profession")}
			</p>
			<p className="p-5 text-center text-text-subtitle text-xl md:px-120">
				{t("introductionSection.description")}
			</p>

			<CTAButton
				Icon={FaArrowDown}
				className="mt-5"
				anchorNav="#skills"
				text={t("buttons.seeMore")}
			/>
			<span className="absolute bottom-6 animate-bounce text-3xl">
				<FaArrowDown />
			</span>
		</section>
	);
}
