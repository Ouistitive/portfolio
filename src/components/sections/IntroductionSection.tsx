import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";

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
			<p className="text-text-subtitle text-xl">
				{t("introductionSection.description")}
			</p>

			<span className="absolute bottom-6 animate-bounce text-3xl">
				<FaArrowDown />
			</span>
		</section>
	);
}
