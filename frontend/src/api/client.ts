const API_URL = import.meta.env.VITE_API_URL ?? "https://steventea.com/api";

const localData = import.meta.glob("../../data/*.json", {
	eager: true,
	import: "default",
}) as Record<string, unknown>;

export async function fetchList<T>(endpoint: string): Promise<T[]> {
	if (import.meta.env.DEV) {
		const data = localData[`../../data/${endpoint}.json`];
		if (data === undefined) throw new Error(`No local data for "${endpoint}"`);
		return data as T[];
	}

	const res = await fetch(`${API_URL}/${endpoint}`);
	if (!res.ok) throw new Error(`API error: ${res.status}`);
	return (await res.json()).data as T[];
}
