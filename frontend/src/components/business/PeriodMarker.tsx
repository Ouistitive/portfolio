interface PeriodMarkerProps {
	from: string;
	to: string;
}

export function PeriodMarker({ from, to }: PeriodMarkerProps) {
	return (
		<div className="nerd-font w-fit shrink-0 rounded border border-border px-2 py-1 text-xs">
			<p>
				{from} - {to}
			</p>
		</div>
	);
}
