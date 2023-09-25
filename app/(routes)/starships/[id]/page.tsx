import Image from 'next/image';

import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/AsyncList';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from './Starship.module.scss';

interface Props {
  params: {
    id: number;
  }
}

async function Starship({ params: { id }}: Props) {
  const { data } = await getData<Starship>(`/starships/${id}`);
  const { name, starship_class, pilots, films } = data;

  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image
          src={imagesObj[toSnakeCase(name) as keyof typeof imagesObj] || imagesObj['no_image']}
          fill
          objectFit='contain'
          alt=''
        />
      </div>
      <div className={styles['text-container']}>
        <h1 className={styles.header}>{name}</h1>
        <p><strong>Starship class: </strong>{starship_class}</p>
        <p><strong>Pilots:</strong></p>
        <AsyncData<Person> url={pilots}>
          <List<Person> />
        </AsyncData>
        <p><strong>Films:</strong></p>
        <AsyncData<Film> url={films}>
          <List<Film> />
        </AsyncData>
      </div>
    </div>
  );
};

export default Starship;