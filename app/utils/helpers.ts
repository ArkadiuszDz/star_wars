import { API_URL } from "./constants";

export const getSlugFromUrl = (url: string) => {
  if (typeof url === 'string') {
    return url.replace(API_URL, '').replace('/people', '');
  }
  return '';
};

export const toSnakeCase = (str: string) => {
  return str.toLowerCase().replace(/( )|(-)|(\/)/ig, '_');
}