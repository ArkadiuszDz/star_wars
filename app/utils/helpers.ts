import { API_URL } from "./constants";

export const getSlugFromUrl = (url: string) => {
  if (typeof url === 'string') {
    return url.replace(API_URL, '');
  }
  return '';
};

export const toSnakeCase = (str: string) => {
  return str.toLowerCase().replace(/( )|(-)|(\/)/ig, '_');
}

export const getCharacterIdFromSlug = (slug: string) => {
  if (typeof slug === 'string') {
    return slug.replace('/people', '');
  }
  return  '';
}