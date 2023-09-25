'use client'
import React from 'react';
import Link from 'next/link';

import { getSlugFromUrl, getCharacterIdFromSlug } from '@/app/utils/helpers';
import styles from './AsyncList.module.scss';

function List<T extends Person | Planet | Film | Vehicle | Species | Starship>({ data }: { data?: T[] }) {

  return (
    <ul>
      {
        Array.isArray(data) && data.map((e: T) => {
          const slug = getSlugFromUrl(e.url);
          if ('title' in e) {
            return (
              <li key={e.title} className={styles['list-item']}>
                <Link href={getCharacterIdFromSlug(slug)} className="text-white">
                  {e.title}
                </Link>
              </li>
            )
          }
          return (
            <li key={e.name} className={styles['list-item']}>
              <Link href={getCharacterIdFromSlug(slug)} className="text-white">
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