import { API_URL } from "./constants";

export const getSlugFromUrl = (url: string) => {
  if (typeof url === 'string') {
    return url.replace(API_URL, '');
  }
  return '';
};

export const toSnakeCase = (str: string) => {
  if (typeof str === 'string') {
    return str.toLowerCase().replace(/( )|(-)|(\/)/ig, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return '';
}

export const getCharacterIdFromSlug = (slug: string) => {
  if (typeof slug === 'string') {
    return slug.replace('/people', '');
  }
  return '';
}