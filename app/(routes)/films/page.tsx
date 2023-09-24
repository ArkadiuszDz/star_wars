import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';

import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

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
              <li key={res.title} className="border-solid border-2 border-blue-800 bg-blue-300">
                <Link href={`${getSlugFromUrl(res.url)}`} className="block h-full w-full">
                  <div className="w-full h-[100px] bg-blue-500 relative">
                    <Image
                      src={imagesObj[toSnakeCase(res.title) as keyof typeof imagesObj] || imagesObj['no_image']}
                      fill
                      objectFit='contain'
                      alt=''
                    />
                  </div>
                  <div className='p-2'>{res.title}</div>
                  <div className='p-2'>Director: {res.director}</div>
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
