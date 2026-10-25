import * as Dialog from "@radix-ui/react-dialog";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

interface ImageFullscreenProps {
	src: string[];
	alt: string;
	className?: string;
	thumbnailClassName?: string;
	autoSlideMs?: number;
}

type AnimState = "closed" | "from" | "to" | "closing";

export default function ImageFullscreen({
	src,
	alt = "Image",
	className = "",
	thumbnailClassName = "",
	autoSlideMs = 10000,
}: ImageFullscreenProps) {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	const [animState, setAnimState] = useState<AnimState>("closed");
	const [paused, setPaused] = useState<boolean>(false);
	const fromRect = useRef<DOMRect | null>(null);
	const thumbRef = useRef<HTMLButtonElement>(null);
	const modalImgRef = useRef<HTMLImageElement>(null);

	const showPrev = useCallback(
		() => setIndex((i) => (i - 1 + src.length) % src.length),
		[src.length],
	);

	const showNext = useCallback(
		() => setIndex((i) => (i + 1) % src.length),
		[src.length],
	);

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") showPrev();
			if (e.key === "ArrowRight") showNext();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open, showNext, showPrev]);

	useEffect(() => {
		if (open || paused || autoSlideMs <= 0 || src.length <= 1) return;

		const timer = setTimeout(() => {
			setIndex((index + 1) % src.length);
		}, autoSlideMs);

		return () => clearTimeout(timer);
	}, [open, paused, index, src.length, autoSlideMs]);

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
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					onClick={handleOpen}
					className={`grid cursor-pointer overflow-hidden rounded transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 ${thumbnailClassName}`}
				>
					{src.map((image, i) => (
						<img
							key={image}
							src={image}
							alt={i === index ? alt : ""}
							aria-hidden={i !== index}
							className={`col-start-1 row-start-1 block max-h-fit max-w-fit justify-self-center object-contain transition-opacity duration-500 ease-in-out ${
								i === index ? "opacity-100" : "opacity-0"
							} ${className}`}
						/>
					))}
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
					onPointerDown={(e) => {
						if (e.target === e.currentTarget) {
							handleClose();
						}
					}}
				>
					{src.length > 1 ? (
						<>
							<button
								type="button"
								onClick={showPrev}
								aria-label="Previous image"
								className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 hover:text-gray-300"
								style={{
									opacity: animState === "to" ? 1 : 0,
									transition: "opacity 200ms ease 150ms",
								}}
							>
								<IoIosArrowBack size={32} className="cursor-pointer" />
							</button>
							<button
								type="button"
								onClick={showNext}
								aria-label="Next image"
								className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 hover:text-gray-300"
								style={{
									opacity: animState === "to" ? 1 : 0,
									transition: "opacity 200ms ease 150ms",
								}}
							>
								<IoIosArrowForward size={32} className="cursor-pointer" />
							</button>
						</>
					) : null}
					<Dialog.Close asChild>
						<button
							type="button"
							className="absolute top-4 right-4 z-10 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 hover:text-gray-300"
							style={{
								opacity: animState === "to" ? 1 : 0,
								transition: "opacity 200ms ease 150ms",
							}}
						>
							<IoMdClose size={24} className="cursor-pointer" />
						</button>
					</Dialog.Close>

					<img
						ref={modalImgRef}
						src={src[index]}
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
