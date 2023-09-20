import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  slug: string;
  name: string;
  image: string;
}

const ListItem: React.FC<Props> = ({ slug, name, image }) => {

  return (
    <li className="border-solid border-2 border-blue-800 bg-blue-300 hover:bg-gray-100">
      <Link href={`/${slug}`} className="block h-full w-full">
        <div className="w-full h-[100px] bg-blue-500">
          <Image src='' alt='' />
        </div>
        <div className='p-2'>{name}</div>
      </Link>
    </li>
  );
};

export default ListItem;
