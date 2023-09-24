import Image from 'next/image';

import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/AsyncList';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from './Planet.module.scss';

interface Props {
  params: {
    id: number;
  }
}

const Planet: React.FC<Props> = async ({ params: { id }}) => {
  const { data } = await getData<Planet>(`/planets/${id}`);
  const { population, name, residents, films } = data;

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
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Residents:</strong></p>
        <AsyncData<Person> url={residents}>
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

export default Planet;