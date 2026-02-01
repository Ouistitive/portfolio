import { FaArrowDown } from "react-icons/fa";

export function IntroductionSection() {
	return (
		<section className="relative flex h-screen flex-col items-center justify-center gap-7">
			<p className="text-7xl">Salut, je suis Steven Tea !</p>
			<p className="font-bold text-4xl text-text-subtitle">
				Ingénieur Cloud & Logiciel
			</p>
			<p className="text-text-subtitle text-xl">coucou</p>

			<span className="absolute bottom-6 animate-bounce text-3xl">
				<FaArrowDown />
			</span>
		</section>
	);
}
