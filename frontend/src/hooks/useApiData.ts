import { useEffect, useState } from "react";

interface UseApiDataResult<T> {
	data: T[];
	isLoading: boolean;
	error: Error | null;
}

export function useApiData<T>(
	fetcher: () => Promise<T[]>,
	deps: unknown[] = [],
): UseApiDataResult<T> {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		let cancelled = false;
		setIsLoading(true);
		setError(null);

		fetcher()
			.then((result) => {
				if (!cancelled) {
					setData(result);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				if (!cancelled) {
					setError(err instanceof Error ? err : new Error(String(err)));
					setIsLoading(false);
				}
			});

		return () => {
			cancelled = true;
		};
	}, deps);

	return { data, isLoading, error };
}
