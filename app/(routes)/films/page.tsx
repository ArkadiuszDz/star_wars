import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import Thumbnail from '@/app/components/Thumbnail';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';
import styles from '@/app/Common.module.scss';

interface ReturnType extends CommonReturnType {
  results: Film[];
}

async function Films({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/films/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Film) => {
            return (
              <li key={res.title} className={styles['list-item']}>
                <Link href={`${getSlugFromUrl(res.url)}`}>
                  <Thumbnail name={res.title}/>
                  <div className={styles['text-container']}>
                    <p><strong>{res.title}</strong></p>
                    <p>Director: {res.director}</p>
                  </div>
                </Link>
              </li>
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug='/films'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Films;
