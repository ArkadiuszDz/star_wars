import Image from 'next/image';

import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/AsyncList';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';

import styles from './Vehicle.module.scss';
interface Props {
  params: {
    id: number;
  }
}

async function Vehicle({ params: { id }}: Props) {
  const { data } = await getData<Vehicle>(`/vehicles/${id}`);
  const { name, vehicle_class, pilots, films } = data;


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
        <p><strong>Vehicle class: </strong>{vehicle_class}</p>
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

export default Vehicle;