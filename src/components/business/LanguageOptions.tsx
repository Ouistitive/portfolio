import i18next from "i18next";
import { useEffect, useRef, useState } from "react";
import { GrLanguage } from "react-icons/gr";

type LanguageAvailable = "FR" | "EN";
const defaultLanguage: LanguageAvailable = "FR";

export function LanguageOptions() {
	const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
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
				className="flex items-center gap-2 rounded border border-border px-3 py-1 hover:bg-bg-surface"
			>
				<GrLanguage />
				<p className="text-lg">{currentLanguage}</p>
			</button>

			{open && (
				<div className="absolute right-0 mt-2 rounded border border-border bg-bg-surface shadow-lg">
					<button
						type="button"
						onClick={() => {
							changeLanguage("FR");
						}}
						className="w-full cursor-pointer px-3 py-2 text-left hover:bg-bg"
					>
						FR
					</button>
					<button
						type="button"
						onClick={() => {
							changeLanguage("EN");
						}}
						className="w-full cursor-pointer px-3 py-2 text-left hover:bg-bg"
					>
						EN
					</button>
				</div>
			)}
		</div>
	);
}
