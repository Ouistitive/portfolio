import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		ns: ["translation"],
		defaultNS: "translation",
		debug: true,
		fallbackLng: "fr",
		keySeparator: ".",
		pluralSeparator: ".",
		compatibilityJSON: "v4",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
		},
	});

export default i18n;
