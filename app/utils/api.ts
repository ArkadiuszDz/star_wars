import { API_URL } from "./constants";

export const getData = async <T>(slug?: string): Promise<{data: T, status: number}> => {
  let apiUrl = API_URL;
  if (slug) {
    apiUrl = `${API_URL}${slug}`;
  }
  try {
    const response = await fetch(apiUrl);
    const { status } = response;
    const data = await response.json();
  
    return { data, status }
  } catch (e) {
    throw new Error ('Something went wrong');
  }
}