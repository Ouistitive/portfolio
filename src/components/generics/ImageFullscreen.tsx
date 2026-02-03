import * as Dialog from "@radix-ui/react-dialog";
import { useCallback, useRef, useState } from "react";

interface ImageFullscreenProps {
	src: string;
	alt: string;
	className?: string;
	thumbnailClassName?: string;
}

type AnimState = "closed" | "from" | "to" | "closing";

export default function ImageFullscreen({
	src,
	alt = "Image",
	className = "",
	thumbnailClassName = "",
}: ImageFullscreenProps) {
	const [open, setOpen] = useState(false);
	const [animState, setAnimState] = useState<AnimState>("closed");
	const fromRect = useRef<DOMRect | null>(null);
	const thumbRef = useRef<HTMLButtonElement>(null);
	const modalImgRef = useRef<HTMLImageElement>(null);

	const getImageStyle = useCallback((): React.CSSProperties => {
		const from = fromRect.current;
		if (!from) return {};

		const vw = window.innerWidth;
		const vh = window.innerHeight;

		if (animState === "from" || animState === "closing") {
			const thumbCenterX = from.left + from.width / 2;
			const thumbCenterY = from.top + from.height / 2;

			const modalImg = modalImgRef.current;
			const imgW = modalImg?.getBoundingClientRect().width ?? vw * 0.9;
			const imgH = modalImg?.getBoundingClientRect().height ?? vh * 0.9;
			const scale = Math.min(from.width / imgW, from.height / imgH);

			return {
				transform: `translate(${thumbCenterX - vw / 2}px, ${thumbCenterY - vh / 2}px) scale(${scale})`,
				opacity: 0.6,
			};
		}

		return { transform: "translate(0px, 0px) scale(1)", opacity: 1 };
	}, [animState]);

	const handleOpen = () => {
		fromRect.current = thumbRef.current?.getBoundingClientRect() ?? null;
		setAnimState("from");
		setOpen(true);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => setAnimState("to"));
		});
	};

	const handleClose = () => {
		setAnimState("closing");
		setTimeout(() => {
			setOpen(false);
			setAnimState("closed");
		}, 300);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={(v) => (!v ? handleClose() : undefined)}
		>
			<Dialog.Trigger asChild>
				<button
					ref={thumbRef}
					type="button"
					onClick={handleOpen}
					className={`cursor-pointer overflow-hidden rounded transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 ${thumbnailClassName}`}
					aria-label={`Ouvrir ${alt} en plein écran`}
				>
					<img
						src={src}
						alt={alt}
						className={`block max-h-fit max-w-fit object-contain ${className}`}
					/>
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay
					className="fixed inset-0 z-9998 bg-black backdrop-blur-sm"
					style={{
						opacity: animState === "to" ? 1 : 0,
						transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)",
					}}
				/>

				<Dialog.Content
					className="fixed inset-0 z-9999 flex items-center justify-center"
					style={{ outline: "none" }}
				>
					<Dialog.Close asChild>
						<button
							type="button"
							className="absolute top-4 right-4 z-10 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 hover:text-gray-300"
							style={{
								opacity: animState === "to" ? 1 : 0,
								transition: "opacity 200ms ease 150ms",
							}}
							aria-label="Close button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<title>Close button</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</Dialog.Close>

					<img
						ref={modalImgRef}
						src={src}
						alt={alt}
						className="max-h-[90vh] max-w-[90vw] object-contain"
						style={{
							...getImageStyle(),
							transition:
								animState === "from"
									? "none"
									: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)",
						}}
					/>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
