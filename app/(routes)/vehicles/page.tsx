import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';

interface ReturnType extends CommonReturnType {
  results: Vehicle[];
}

async function Vehicles({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/vehicles/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Vehicle) => {
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
        slug='/vehicles'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Vehicles;
