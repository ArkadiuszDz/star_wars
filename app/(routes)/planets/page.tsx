import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';


interface ReturnType extends CommonReturnType {
  results: Planet[];
}

async function Planets({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/planets/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((planet: Planet) => {
            return (
              <ListItem
                key={planet.name}
                data={planet}
                header='name'
                slug={getSlugFromUrl(planet.url)}
                info={[{label: 'Population: ', accessor: 'population'}]}
              />
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug='/planets'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Planets;
