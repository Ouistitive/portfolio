interface BadgeProps {
	title: string;
}

export function Badge({ title }: BadgeProps) {
	return (
		<article className="nerd-font rounded border border-border bg-bg-tags px-1.5 py-0.5">
			<p className="text-sm">{title}</p>
		</article>
	);
}
