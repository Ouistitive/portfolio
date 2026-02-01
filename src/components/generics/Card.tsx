
interface CardProps {
    title: string
    description: string;
}

export function Card({ title, description }: CardProps) {
    return (
        <article className="bg-bg-highlight p-5 rounded-2xl w-[100%]">
            <p className="text-2xl font-bold">{title}</p>
            <hr />
            <p>{description}</p>
        </article>
    );
}