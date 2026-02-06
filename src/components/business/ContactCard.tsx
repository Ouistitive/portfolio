import type { IconType } from "react-icons";
import { Card } from "../generics/Card";

interface ContactCardProps {
	Icon: IconType;
	text: string;
	link?: string;
}

export function ContactCard({ Icon, text, link }: ContactCardProps) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Card
				className={`flex flex-col items-center gap-3 px-10 py-5 ${link ? "cursor-pointer" : ""}`}
			>
				<Icon size={50} />
				<p className="text-center text-sm italic">{text}</p>
			</Card>
		</a>
	);
}
