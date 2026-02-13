import i18next from "i18next";
import { useEffect, useRef, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import type { LanguageAvailable } from "../../types/types";
import { constants } from "../../utils/constants";

export function LanguageOptions() {
	const [currentLanguage, setCurrentLanguage] = useState(
		i18next.language.toUpperCase() || constants.DEFAULT_LANGUAGE,
	);
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const changeLanguage = (languageCode: LanguageAvailable) => {
		i18next.changeLanguage((languageCode as string).toLowerCase());
		setCurrentLanguage(languageCode);
		setOpen(false);
	};

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex cursor-pointer items-center gap-2 rounded border border-border px-3 py-1 hover:bg-bg-surface"
			>
				<GrLanguage />
				<p className="text-lg">{currentLanguage}</p>
			</button>

			<div className="absolute right-0 mt-2 rounded border border-border bg-bg/40 shadow-lg backdrop-blur-md">
				{open &&
					constants.LANGUAGES_AVAILABLE.map((language) => (
						<button
							key={language}
							type="button"
							onClick={() => {
								changeLanguage(language as LanguageAvailable);
							}}
							className="w-full cursor-pointer px-3 py-2 text-right hover:bg-bg"
						>
							{language}
						</button>
					))}
			</div>
		</div>
	);
}
