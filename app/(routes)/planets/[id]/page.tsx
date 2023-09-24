import React from 'react';
import { getData } from '@/app/utils/api';
import AsyncData from '@/app/components/AsyncData';
import List from '@/app/components/ClientList';

interface Props {
  params: {
    id: number;
  }
}

const Planet: React.FC<Props> = async ({ params: { id }}) => {
  const { data } = await getData<Planet>(`/planets/${id}`);

  return (
    <div className="text-white">
      <p>{data.name}</p>
      <p>{data.population}</p>
      <AsyncData<Person> url={data.residents}>
        <List<Person> />
      </AsyncData>

      <AsyncData<Film> url={data.films}>
        <List<Film> />
      </AsyncData>
    </div>
  );
};

export default Planet;