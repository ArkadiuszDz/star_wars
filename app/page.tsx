import List from '@/app/components/List';
import ListItem from '@/app/components/ListItem';
import Pagination from '@/app/components/Pagination';
import { getSlugFromUrl, getCharacterIdFromSlug } from '@/app/utils/helpers';
import { getData } from '@/app/utils/api';

interface ReturnType extends CommonReturnType {
  results: Person[];
}

export default async function Home({ searchParams }: PageComponentProps) {

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const { data } = await getData<ReturnType>(`/people/?page=${page}`);
  const prevSlug = getSlugFromUrl(data.previous);
  const nextSlug = getSlugFromUrl(data.next);

  return (
    <div>
      <List>
        {
          data?.results && data.results.map(character => {
            const slug = getSlugFromUrl(character.url);
            return (
              <ListItem
                key={character.name}
                data={character}
                header='name'
                slug={getCharacterIdFromSlug(slug)}
                info={[{label: 'Gender', accessor: 'gender'}]}
              />
            );
          })
        }
      </List>
      <Pagination
        count={data.count}
        slug=''
        nextLink={getCharacterIdFromSlug(nextSlug)}
        prevLink={getCharacterIdFromSlug(prevSlug)}
        currentPage={page}
      />
    </div>
  )
}
