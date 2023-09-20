import { API_URL } from "./constants";

export const getSlugFromUrl = (url: string) => {
  return url.replace(API_URL, '');
};