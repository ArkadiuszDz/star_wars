import Image from 'next/image';

import AsyncData from '@/app/components/AsyncData';
import AsyncList from '@/app/components/AsyncList';
import AsyncLink from '@/app/components/AsyncLink';
import NotFound from '@/app/components/NotFound';
import { getData } from '@/app/utils/api';
import { imagesObj } from '@/app/utils/images';
import { toSnakeCase } from '@/app/utils/helpers';
import { ResponseCodes } from '@/app/utils/constants';

import styles from '@/app/DetailsPage.module.scss';

interface Props {
  params: {
    id: number;
  }
}

async function Character({ params: { id }}: Props) {

  const { data, status } = await getData<Person>(`/people/${id}`);

  const { vehicles, name, homeworld, starships, species } = data;

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
        <p><strong>Homeworld:</strong>{" "}
          <AsyncData<Planet> url={homeworld}>
            <AsyncLink<Planet> />
          </AsyncData>
        </p>
        <p><strong>Vehicles:</strong></p>
        <AsyncData<Vehicle> url={vehicles}>
          <AsyncList<Vehicle> />
        </AsyncData>
        <p><strong>Starships:</strong></p>
        <AsyncData<Starship> url={starships}>
          <AsyncList<Starship> />
        </AsyncData>
        <p><strong>Race:</strong></p>
        <AsyncData<Species> url={species}>
          <AsyncList<Species> />
        </AsyncData>
      </div>
    </div>
  );
};

export default Character;