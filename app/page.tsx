import List from './components/List';
import ListItem from './components/ListItem';
import Pagination from '@/app/components/Pagination';
import { getSlugFromUrl } from './utils/helpers';
import { getData } from '@/app/utils/api';

interface ReturnType extends CommonReturnType {
  results: Person[];
}

export default async function Home({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/people/?page=${page}`);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map(character => {
            return (
              <ListItem
                key={character.name}
                name={character.name}
                slug={getSlugFromUrl(character.url)}
              />
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug=''
        nextLink={getSlugFromUrl(data.next)}
        prevLink={getSlugFromUrl(data.previous)}
        currentPage={page}
      />
    </div>
  )
}
