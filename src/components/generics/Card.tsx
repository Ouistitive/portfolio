import type { ReactNode } from "react";

interface CardProps {
	className?: string;
	children: ReactNode;
}

export function Card({ className, children }: CardProps) {
	return (
		<article
			className={`w-full rounded-2xl border border-border bg-bg-highlight p-5 transition duration-400 ease-in-out hover:-translate-y-2 ${className || ""}`}
		>
			{children}
		</article>
	);
}
