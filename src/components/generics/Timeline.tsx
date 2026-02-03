import type { IconType } from "react-icons";
import type { TimelineItemProps } from "../../types/TimelineItem";
import { Card } from "./Card";

interface TimelineProps {
	Icon?: IconType;
	timelineItems: TimelineItemProps[];
}

interface TimelineItemExtraProps {
	Icon?: IconType;
	from: Date;
	to: Date;
	title: string;
	subtitle: string;
	description: string;
}

function TimelineItem({
	Icon,
	from,
	to,
	title,
	subtitle,
	description,
}: TimelineItemExtraProps) {
	return (
		<Card>
			<div className="flex items-start justify-between">
				<div className="flex items-center gap-2">
					{Icon ? <Icon /> : null}
					<p className="font-bold">{title}</p>
				</div>
				<div className="rounded border border-border px-2 py-1 text-xs">
					<p>
						{from.getFullYear()} - {to.getFullYear()}
					</p>
				</div>
			</div>
			<p className="italic">{subtitle}</p>
			<p>{description}</p>
		</Card>
	);
}

export function Timeline({ Icon, timelineItems }: TimelineProps) {
	return (
		<section className="flex justify-center pt-20">
			<div className="w-230">
				<ul>
					{timelineItems.map((item) => (
						<li
							key={item.title}
							className="relative flex items-baseline gap-6 py-5 pb-5"
						>
							<div className="before:absolute before:top-0 before:left-[5.5px] before:h-full before:w-px before:bg-border">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									className="bi bi-circle-fill fill-border"
									viewBox="0 0 16 16"
								>
									<title>circle</title>
									<circle cx="8" cy="8" r="8" />
								</svg>
							</div>

							<TimelineItem
								Icon={Icon}
								from={item.from}
								to={item.to}
								title={item.title}
								subtitle={item.subtitle}
								description={item.description}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
