import { API_URL } from "./constants";

export const getData = async <T>(id?: number): Promise<{results: T[], status: number}> => {
  let apiUrl = API_URL;
  if (id !== undefined) {
    apiUrl = `${API_URL}/${id}`;
  }
  const response = await fetch(apiUrl);
  const { status } = response;
  const results = await response.json();

  return { results, status }
}