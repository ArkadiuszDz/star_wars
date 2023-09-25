import { toSnakeCase, getSlugFromUrl, getCharacterIdFromSlug } from '@/app/utils/helpers';

describe('Testing helpers', () => {
  it('should convert a string to snake case', () => {
    const str = 'Obi-Wan Kenobi';

    expect(toSnakeCase(str)).toBe('obi_wan_kenobi');
  });
  it('should return an empty string for wrong input', () => {
    const str = 10;

    expect(toSnakeCase(str)).toBe('');
  });
  it('should return slug from url', () => {
    const url = 'https://swapi.dev/api/people/?page=1';

    expect(getSlugFromUrl(url)).toBe('/people/?page=1');
  });
  it('should return character id from the slug', () => {
    const url = 'https://swapi.dev/api/people/10';
    const slug = getSlugFromUrl(url);

    expect(getCharacterIdFromSlug(slug)).toBe('/10');
  });
});