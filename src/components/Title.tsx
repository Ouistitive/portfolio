
interface TitleProps {
    title: string
}

export function Title({ title }: TitleProps) {
    return (
        <div className="flex items-center gap-4 text-4xl my-10 mx-5">
            <hr className="flex-1 border-gray-400" />
            <span className="whitespace-nowrap font-semibold">
                {title}
            </span>
            <hr className="flex-1 border-gray-400" />
        </div>
    )
}
