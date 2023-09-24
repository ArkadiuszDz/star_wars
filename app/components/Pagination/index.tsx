import Link from 'next/link';
import cn from 'classnames';

import styles from './Pagination.module.scss';

interface Props {
  currentPage: number;
  count: number;
  nextLink: string;
  prevLink: string;
  limit?: number;
  slug: string;
}

function Pagination({ count, nextLink, prevLink, slug, currentPage, limit = 10 }: Props) {

  const numOfPages = Math.ceil(count / limit);

  if (numOfPages ===  1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      {prevLink && <Link href={prevLink || ''} className={styles['pagination-link']}>Previous</Link>}
      {
        [...Array(numOfPages)].map((_, index: number) => {
          return (
            <Link
              href={`${slug}/?page=${index + 1}`}
              key={index}
              className={cn(`${styles['pagination-link']}`, { [styles.active]: currentPage === (index + 1) })}
            >
              {index + 1}
            </Link>
          );
        })
      }
      {nextLink && <Link href={nextLink || ''} className={styles['pagination-link']}>Next</Link>}
    </div>
  );
};

export default Pagination;
