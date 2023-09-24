import Link from 'next/link';

import List from '@/app/components/List';
import Thumbnail from '@/app/components/Thumbnail';
import Pagination from '@/app/components/Pagination';
import { getSlugFromUrl, getCharacterIdFromSlug } from '@/app/utils/helpers';
import { getData } from '@/app/utils/api';

import styles from './Common.module.scss';

interface ReturnType extends CommonReturnType {
  results: Person[];
}

export default async function Home({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/people/?page=${page}`);
  const prevSlug = getSlugFromUrl(data.previous);
  const nextSlug = getSlugFromUrl(data.next);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map(character => {
            const slug = getSlugFromUrl(character.url);
            return (
              <li key={character.name} className={styles['list-item']}>
                <Link href={getCharacterIdFromSlug(slug)}>
                  <Thumbnail name={character.name}/>
                  <div className={styles['text-container']}>
                    <p><strong>{character.name}</strong></p>
                  </div>
                </Link>
              </li>
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug=''
        nextLink={getCharacterIdFromSlug(nextSlug)}
        prevLink={getCharacterIdFromSlug(prevSlug)}
        currentPage={page}
      />
    </div>
  )
}
