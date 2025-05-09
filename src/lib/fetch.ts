import { API_BASE_URL, TMDB_TOKEN } from "@/constants/urls";

export async function fetchTMDB(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
