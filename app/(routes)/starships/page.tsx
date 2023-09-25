import Link from 'next/link';

import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import Thumbnail from '@/app/components/Thumbnail';
import styles from '@/app/Common.module.scss';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';

interface ReturnType extends CommonReturnType {
  results: Starship[];
}

async function Starships({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/starships/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Starship) => {
            return (
              <li key={res.name} className={styles['list-item']}>
                <Link href={`${getSlugFromUrl(res.url)}`}>
                  <Thumbnail name={res.name}/>
                  <div className={styles['text-container']}>
                    <p><strong>{res.name}</strong></p>
                    <p><strong>Manufacturer: </strong>{res.manufacturer}</p>
                  </div>
                </Link>
              </li>
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug='/starships'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Starships;
