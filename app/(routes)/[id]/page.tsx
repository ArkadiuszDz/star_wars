import React from 'react';

import AsyncData from '@/app/components/AsyncData';
import AsyncList from '@/app/components/AsyncList';
import AsyncLink from '@/app/components/AsyncLink';
import { getData } from '@/app/utils/api';

interface Props {
  params: {
    id: number;
  }
}

async function Character({ params: { id }}: Props) {

  const { data } = await getData<Person>(`/people/${id}`);
  const { vehicles, name, homeworld, starships, species } = data;

  return (
    <div>
      <p>{name}</p>
      <p className='text-white'>Homeworld:{" "}
        <AsyncData<Planet> url={homeworld}>
          <AsyncLink<Planet> />
        </AsyncData>
      </p>
      <p className='text-white'>Vehicles:</p>
      <AsyncData<Vehicle> url={vehicles}>
        <AsyncList<Vehicle> />
      </AsyncData>
      <p className='text-white'>Starships:</p>
      <AsyncData<Starship> url={starships}>
        <AsyncList<Starship> />
      </AsyncData>
      <p className='text-white'>Species:</p>
      <AsyncData<Species> url={species}>
        <AsyncList<Species> />
      </AsyncData>
    </div>
  );
};

export default Character;