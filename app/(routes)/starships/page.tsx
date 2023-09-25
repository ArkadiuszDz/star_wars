import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';

interface ReturnType extends CommonReturnType {
  results: Starship[];
}

async function Starships({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/starships/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Starship) => {
            return (
              <ListItem
                key={res.name}
                data={res}
                header='name'
                slug={getSlugFromUrl(res.url)}
                info={[{label: 'Manufacturer: ', accessor: 'manufacturer'}]}
              />
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug='/starships'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Starships;
