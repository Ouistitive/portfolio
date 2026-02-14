export const navigateToAnchor = (id: string, duration = 500) => {
	const element = document.getElementById(id);
	if (!element) return;

	const start = window.scrollY || window.pageYOffset;
	const end = element.getBoundingClientRect().top + start;
	const distance = end - start;
	let startTime: number | null = null;

	const easeInOutQuad = (t: number) =>
		t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

	const animateScroll = (currentTime: number) => {
		if (!startTime) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const progress = Math.min(timeElapsed / duration, 1);
		const ease = easeInOutQuad(progress);

		window.scrollTo(0, start + distance * ease);

		if (timeElapsed < duration) {
			requestAnimationFrame(animateScroll);
		}
	};

	requestAnimationFrame(animateScroll);
};
