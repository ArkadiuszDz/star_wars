import Pagination from '@/app/components/Pagination';
import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import { getData } from '@/app/utils/api';
import { getSlugFromUrl } from '@/app/utils/helpers';

interface ReturnType extends CommonReturnType {
  results: Film[];
}

async function Films({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/films/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map((res: Film) => {
            return (
              <ListItem
                key={res.title}
                data={res}
                header='title'
                slug={getSlugFromUrl(res.url)}
                info={[{label: 'Director: ', accessor: 'director'}]}
              />
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug='/films'
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  );
};

export default Films;
