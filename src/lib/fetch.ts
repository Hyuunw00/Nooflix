import { API_BASE_URL, TMDB_TOKEN } from "@/constants/urls";

export async function fetchTMDB(
  endpoint: string,
  params: Record<string, string> = {}
) {
  const defaultParams = {
    language: "ko-KR",
    region: "KR",
    watch_region: "KR",
    ...params,
  };

  // 파라미터를 쿼리 스트링으로 변환
  const queryString = new URLSearchParams(defaultParams).toString();

  const response = await fetch(`${API_BASE_URL}${endpoint}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error("Failed to fetch Data");

  return await response.json();
}
