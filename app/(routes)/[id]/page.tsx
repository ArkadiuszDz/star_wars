import React from 'react';
import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';

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
      <AsyncData<Planet> url={homeworld} />
      <AsyncData<Vehicle> url={vehicles} />
      <AsyncData<Starship> url={starships} />
      <AsyncData<Species> url={species} />
    </div>
  );
};

export default Character;