interface SubHeader {
	title: string;
}

export function SubHeader({ title }: SubHeader) {
	return <p className="text-2xl text-text-subtitle">{title}</p>;
}
