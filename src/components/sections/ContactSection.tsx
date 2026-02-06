import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { constants } from "../../utils/constants";
import { ContactCard } from "../business/ContactCard";
import { SubHeader } from "../generics/SubHeader";

export function ContactSection() {
	const { t } = useTranslation();

	return (
		<section className="flex flex-col items-center gap-20">
			<SubHeader title={t("contactSection.subheader")} />
			<div className="flex w-full justify-center gap-15">
				<ContactCard
					Icon={FaGithub}
					text={t("contactSection.contacts.github")}
					link={constants.GITHUB_LINK}
				/>
				<ContactCard
					Icon={FaLinkedin}
					text={t("contactSection.contacts.linkedin")}
					link={constants.LINKED_IN}
				/>
				<ContactCard
					Icon={MdEmail}
					text={t("contactSection.contacts.email")}
					link={`mailto:${constants.EMAIL}`}
				/>
			</div>
		</section>
	);
}
