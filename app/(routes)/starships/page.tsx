import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';

import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

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
              <li key={res.name} className="border-solid border-2 border-blue-800 bg-blue-300">
                <Link href={`${getSlugFromUrl(res.url)}`} className="block h-full w-full">
                  <div className="w-full h-[100px] bg-blue-500 relative">
                    <Image
                      src={imagesObj[toSnakeCase(res.name) as keyof typeof imagesObj] || imagesObj['no_image']}
                      fill
                      objectFit='contain'
                      alt=''
                    />
                  </div>
                  <div className='p-2'>{res.name}</div>
                  <div className='p-2'>Manufacturer: {res.manufacturer}</div>
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
