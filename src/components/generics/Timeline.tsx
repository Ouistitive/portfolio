import type { IconType } from "react-icons";
import type { TimelineItemProps } from "../../types/types";
import { Badge } from "./Badge";
import { Card } from "./Card";

interface TimelineProps {
	Icon?: IconType;
	timelineItems: TimelineItemProps[];
}

interface TimelineItemExtraProps {
	img?: string;
	from: string;
	to: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
}

function TimelineItem({
	img,
	from,
	to,
	title,
	subtitle,
	description,
	tags,
}: TimelineItemExtraProps) {
	return (
		<Card>
			<div className="flex items-start justify-between">
				<div className="flex items-center gap-2">
					{img ? (
						<div className="flex h-12 w-12 items-center rounded-md">
							<img alt="" src={img} />
						</div>
					) : null}
					<div>
						<p className="font-bold">{title}</p>
						<p className="italic">{subtitle}</p>
					</div>
				</div>
				<div className="rounded border border-border px-2 py-1 text-xs">
					<p>
						{from} - {to}
					</p>
				</div>
			</div>
			<p className="mt-4">{description}</p>

			{tags.length !== 0 ? (
				<div className="mt-5 flex gap-2">
					{tags?.map((t) => (
						<Badge key={t} title={t}></Badge>
					))}
				</div>
			) : null}
		</Card>
	);
}

export function Timeline({ timelineItems }: TimelineProps) {
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
								img={item.img}
								from={item.from}
								to={item.to}
								title={item.title}
								subtitle={item.subtitle}
								description={item.description}
								tags={item.tags ?? []}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
