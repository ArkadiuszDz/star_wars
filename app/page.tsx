import List from './components/List';
import ListItem from './components/ListItem';
import { getSlugFromUrl } from './utils/helpers';

export default function Home() {

  const characters = [
    {
      name: 'Darth Vader',
      image:'',
      url: ''
    },
    {
      name: 'Darth Maul',
      image: '',
      url: ''
    },
    {
      name: 'Obi-Wan Kenobi',
      image: '',
      url: ''
    },
    {
      name: 'Anakin Skywalker',
      image: '',
      url: ''
    },
    {
      name: 'Darth Sidious',
      image: '',
      url: ''
    },
    {
      name: 'Count Dooku',
      image: '',
      url: ''
    },
    {
      name: 'Yoda',
      image: '',
      url: ''
    }
  ];

  return (
    <div>
      <List>
        {
          characters.map(character => {
            return (
              <ListItem
                key={character.name}
                name={character.name}
                image={character.image}
                slug={getSlugFromUrl(character.url)}
              />
            );
          })
        }
      </List>
    </div>
  )
}
