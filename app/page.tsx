import List from './components/List';
import ListItem from './components/ListItem';
import { getSlugFromUrl } from './utils/helpers';
import { getData } from '@/app/utils/api';

export default async function Home() {

  const { data } = await getData<{results: Person[]}>('/people');

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
    </div>
  )
}
