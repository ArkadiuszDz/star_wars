import React from 'react';
import Image from 'next/image';

import { getData } from '@/app/utils/api';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import Link from 'next/link';
import { getSlugFromUrl } from '@/app/utils/helpers';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

const Planets: React.FC = async () => {

  const { data } = await getData<{results: Planet[]}>('/planets');

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Planet) => {
            return (
              <li key={res.name} className="border-solid border-2 border-blue-800 bg-blue-300">
                <div className="w-full h-[100px] bg-blue-500 relative">
                  <Image
                    src={imagesObj[toSnakeCase(res.name) as keyof typeof imagesObj] || imagesObj['no_image']}
                    fill
                    objectFit='contain'
                    alt=''
                  />
                </div>
                <Link href={`${getSlugFromUrl(res.url)}`} className="block h-full w-full">
                  <div className='p-2'>{res.name}</div>
                  <div className='p-2'>{res.population}</div>
                </Link>
              </li>
            );
          })
        }
      </List>
    </div>
  );
};

export default Planets;
