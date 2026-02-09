import { Link } from "react-router-dom";

export function AboutMePage() {
	return (
		<div className="relative flex h-screen flex-col items-center justify-center gap-7 bg-bg">
			<p className="text-center text-3xl md:text-7xl">Coming soon...</p>
			<Link to="/">
				<button
					type="button"
					className="cursor-pointer rounded-2xl border border-border bg-text p-3 text-center font-bold text-2xl text-text-subtitle md:text-2xl"
				>
					Return to main page
				</button>
			</Link>
		</div>
	);
}
