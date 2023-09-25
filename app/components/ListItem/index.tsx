import Link from 'next/link';
import Thumbnail from '@/app/components/Thumbnail';
import { getCharacterIdFromSlug } from '@/app/utils/helpers';

import styles from '@/app/components/ListItem/ListItem.module.scss';

interface TextContent {
  label?: string;
  accessor: string;
}

interface Props {
  slug: string;
  header: keyof Person | keyof Film | keyof Planet | keyof Vehicle | keyof Starship | keyof Species;
  info: TextContent[];
  data: Person | Film | Planet | Vehicle | Starship | Species;
}

function ListItem({ slug, header, info, data }: Props) {

  return (
    <li className={styles['list-item']}>
      <Link href={getCharacterIdFromSlug(slug)}>
        <Thumbnail name={data[header as keyof typeof data]}/>
        <div className={styles['text-container']}>
          <p>
            <strong>{data[header as keyof typeof data]}</strong>
          </p>
          {
            info && info.map(e => {
              return (
                <p key={data[e.accessor as keyof typeof data]}>
                  {e.label && <strong>{e.label}: </strong>}{data[e.accessor as keyof typeof data]}
                </p>
              );
            })
          }
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
