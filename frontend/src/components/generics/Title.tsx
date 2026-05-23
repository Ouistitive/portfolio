interface TitleProps {
	title: string;
}

export function Title({ title }: TitleProps) {
	return (
		<div className="mx-5 my-10 flex items-center gap-4 text-4xl md:mx-20">
			<hr className="flex-1 border-line" />
			<span className="whitespace-nowrap font-semibold">{title}</span>
			<hr className="flex-1 border-line" />
		</div>
	);
}
