import Image from 'next/image';

import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/AsyncList';
import NotFound from '@/app/components/NotFound';
import { ResponseCodes } from '@/app/utils/constants';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from './Film.module.scss';

interface Props {
  params: {
    id: number;
  }
}

async function Film({ params: { id }}: Props) {
  const { data, status } = await getData<Film>(`/films/${id}`);
  const { title, episode_id, opening_crawl, characters, planets, starships, vehicles } = data;

  if (status === ResponseCodes.NotFound) {
    return <NotFound />
  }

  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image
          src={imagesObj[toSnakeCase(title) as keyof typeof imagesObj] || imagesObj['no_image']}
          fill
          objectFit='contain'
          alt=''
        />
      </div>
      <div className={styles['text-container']}>
        <h1 className={styles.header}>{title}</h1>
        <p><strong>Epizode: </strong>{episode_id}</p>
        <p>{opening_crawl}</p>
        <p><strong>Characters:</strong></p>
        <AsyncData<Person> url={characters}>
          <List<Person> />
        </AsyncData>
        <p><strong>Planets:</strong></p>
        <AsyncData<Planet> url={planets}>
          <List<Planet> />
        </AsyncData>
        <p><strong>Vehciles:</strong></p>
        <AsyncData<Vehicle> url={vehicles}>
          <List<Vehicle> />
        </AsyncData>
        <p><strong>Starships:</strong></p>
        <AsyncData<Starship> url={starships}>
          <List<Starship> />
        </AsyncData>
      </div>
    </div>
  );
};

export default Film;