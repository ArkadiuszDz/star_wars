import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

interface Props {
  slug: string;
  name: string;
}

const ListItem: React.FC<Props> = ({ slug, name }) => {

  return (
    <li className="border-solid border-2 border-blue-800 bg-blue-300 hover:bg-gray-100">
      <Link href={`/${slug}`} className="block h-full w-full text-white">
        <div className="w-full h-[100px] bg-blue-500 relative">
          <Image
            src={imagesObj[toSnakeCase(name) as keyof typeof imagesObj] || imagesObj['no_image']}
            fill
            objectFit='contain'
            alt=''
          />
        </div>
        <div className='p-2'>{name}</div>
      </Link>
    </li>
  );
};

export default ListItem;
