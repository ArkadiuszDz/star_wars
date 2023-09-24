'use client'

import Link from 'next/link';

import { getSlugFromUrl, getCharacterIdFromSlug } from '@/app/utils/helpers';

function AsyncLink<T extends Person | Planet | Film | Vehicle | Species | Starship>({ data }: { data?: T}) {
  if (data) {
    return (
      <Link href={getSlugFromUrl(data.url)} className='text-white'>
        {'title' in data ? data.title : data.name}
      </Link>
    );
  }
  return null;
};

export default AsyncLink;
