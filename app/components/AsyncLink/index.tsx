'use client'

import Link from 'next/link';

import { getSlugFromUrl } from '@/app/utils/helpers';
import styles from './AsyncLink.module.scss';

function AsyncLink<T extends Person | Planet | Film | Vehicle | Species | Starship>({ data }: { data?: T}) {
  if (data) {
    return (
      <Link href={getSlugFromUrl(data.url)} className={styles.link}>
        {'title' in data ? data.title : data.name}
      </Link>
    );
  }
  return null;
};

export default AsyncLink;
