import Link from 'next/link';
import styles from './NotFound.module.scss';

const NotFound = () => {

  return (
    <div className={styles['not-found']}>
      <p>This isn&apos;t the content you&apos;re looking for...</p>
      <div>
        <Link href="/">Go back to homepage</Link>
      </div>
    </div>
  );
};


export default NotFound;
