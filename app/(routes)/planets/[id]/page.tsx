import Image from 'next/image';

import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/AsyncList';
import NotFound from '@/app/components/NotFound';
import { ResponseCodes } from '@/app/utils/constants';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from '@/app/DetailsPage.module.scss';

interface Props {
  params: {
    id: number;
  }
}

async function Planet({ params: { id }}: Props) {
  const { data, status } = await getData<Planet>(`/planets/${id}`);
  const { population, name, residents, films } = data;

  if (status === ResponseCodes.NotFound) {
    return <NotFound />
  }

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