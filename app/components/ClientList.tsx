'use client'
import React from 'react';
import Link from 'next/link';

import { getSlugFromUrl } from '@/app/utils/helpers';

function List<T extends Person | Planet | Film | Vehicle | Species | Starship>({ data }: { data?: T[] }) {
  return (
    <ul>
      {
        data && data.map((e: T) => {
          if ('title' in e) {
            return (
              <li key={e.title}>
                <Link href={getSlugFromUrl(e.url)} className="text-white">
                  {e.title}
                </Link>
              </li>
            )
          }
          return (
            <li key={e.name}>
              <Link href={getSlugFromUrl(e.url)} className="text-white">
                {e.name}
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default List;