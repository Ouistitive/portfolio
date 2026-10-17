import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import type { TimelineItemProps } from "../../types/types";
import { PeriodMarker } from "../business/PeriodMarker";
import { Badge } from "./Badge";
import { Card } from "./Card";

interface TimelineProps {
	timelineItems: TimelineItemProps[];
}

interface TimelineItemExtraProps {
	img?: string;
	Icon?: IconType;
	from: string;
	to: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
}

function TimelineItem({
	img,
	Icon,
	from,
	to,
	title,
	subtitle,
	description,
	tags,
}: TimelineItemExtraProps) {
	return (
		<Card>
			<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex items-start gap-2 sm:items-center">
					{img ? (
						<div className="flex h-12 w-12 items-center rounded-md">
							<img alt="" src={img} />
						</div>
					) : null}
					{Icon ? (
						<div className="rounded-md border p-3">
							<Icon size={20} />
						</div>
					) : null}
					<div>
						<p className="font-bold">{title}</p>
						<p className="italic">{subtitle}</p>
					</div>
				</div>
				<PeriodMarker from={from} to={to} />
			</div>
			<p className="mt-4">{description}</p>

			{tags.length !== 0 ? (
				<div className="mt-5 flex flex-wrap gap-2">
					{tags?.map((t) => (
						<Badge key={t} title={t}></Badge>
					))}
				</div>
			) : null}
		</Card>
	);
}

export function TimelineGroup({ items }: { items: TimelineItemProps[] }) {
	const { t } = useTranslation();
	const current = items[0];
	const oldest = items[items.length - 1];

	return (
		<Card>
			<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex items-center gap-3">
					{current.img ? (
						<div className="flex h-12 w-12 items-center rounded-md">
							<img alt="" src={current.img} />
						</div>
					) : null}
					<p className="font-medium">{current.place}</p>
				</div>
				<PeriodMarker from={oldest.from} to={current.to} />
			</div>

			<ol className="relative mt-4 space-y-6 pl-7 before:absolute before:top-2 before:bottom-2 before:left-1.25 before:w-px before:bg-border">
				{items.map((item, i) => (
					<li key={`${item.title}-${item.from}`} className="relative space-y-3">
						{i > 0 && (
							<div className="relative -ml-7 flex items-center py-1 pl-7">
								<span className="absolute -left-px z-20 h-3 w-3 rounded-full bg-zinc-600" />
								<span className="font-medium text-primary text-xs">
									{t("experienceSection.mobility")} - {items[i - 1].from}
								</span>
							</div>
						)}

						{i === 0 && (
							<span className="absolute top-1 -left-[28.5px] z-20 h-3 w-3 rounded-full bg-blue-500 shadow-md ring-4 ring-black" />
						)}

						<div className="flex flex-wrap items-start justify-between gap-2">
							<div>
								<p className="font-medium">{item.title}</p>
							</div>
							<div className="flex items-center gap-2">
								<PeriodMarker from={item.from} to={item.to} />
							</div>
						</div>

						<p className="text-sm">{item.description}</p>

						<div className="flex flex-wrap gap-1.5">
							{(item.tags ?? []).map((tag) => (
								<Badge key={tag} title={tag}></Badge>
							))}
						</div>
					</li>
				))}
			</ol>
		</Card>
	);
}

function groupByPlace(items: TimelineItemProps[]) {
	return items.reduce<TimelineItemProps[][]>((groups, item) => {
		const last = groups[groups.length - 1];
		if (last && last[0].place === item.place) last.push(item);
		else groups.push([item]);
		return groups;
	}, []);
}

export function Timeline({ timelineItems }: TimelineProps) {
	const groups = groupByPlace(timelineItems);

	return (
		<section className="flex justify-center pt-20">
			<div className="w-full max-w-4xl px-2 md:px-4">
				<ul>
					{groups.map((group) => {
						const first = group[0];
						return (
							<li
								key={`${first.place}-${first.from}`}
								className="relative flex items-baseline gap-2 py-5 sm:gap-6"
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

								{group.length === 1 ? (
									<TimelineItem
										img={first.img}
										Icon={first.Icon}
										from={first.from}
										to={first.to}
										title={first.title}
										subtitle={first.place}
										description={first.description}
										tags={first.tags ?? []}
									/>
								) : (
									<TimelineGroup items={group} />
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
