import Link from 'next/link';
import cn from 'classnames';

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
    <>
      {prevLink && <Link href={prevLink || ''} className='text-white'>Previous</Link>}
      {
        [...Array(numOfPages)].map((_, index: number) => {
          return (
            <Link
              href={`${slug}/?page=${index + 1}`}
              key={index}
              className={cn(currentPage === (index + 1) ? 'text-blue-500' : 'text-white')}
            >
              {index + 1}
            </Link>
          );
        })
      }
      {nextLink && <Link href={nextLink || ''} className='text-white'>Next</Link>}
    </>
  );
};

export default Pagination;
