import type { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <article className={`bg-bg-highlight p-5 rounded-2xl w-full border transition duration-400 ease-in-out hover:-translate-y-2 ${className || ""}`}>
            {children}
        </article>
    );
}