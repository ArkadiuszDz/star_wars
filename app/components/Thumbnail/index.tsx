import Image from 'next/image';

import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from './Thumbnail.module.scss';

interface Props {
  name: string;
}

function Thumbnail({ name }: Props) {
  return (
    <div className={styles.thumbnail}>
      <Image
        src={imagesObj[toSnakeCase(name) as keyof typeof imagesObj] || imagesObj['no_image']}
        fill
        objectFit='contain'
        alt=''
      />
    </div>
  );
};

export default Thumbnail;