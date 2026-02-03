interface TitleProps {
	title: string;
}

export function Title({ title }: TitleProps) {
	return (
		<div className="mx-20 my-10 flex items-center gap-4 text-4xl">
			<hr className="flex-1 border-line" />
			<span className="whitespace-nowrap font-semibold">{title}</span>
			<hr className="flex-1 border-line" />
		</div>
	);
}
