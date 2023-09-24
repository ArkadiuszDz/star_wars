import styles from './List.module.scss';

interface Props {
  children: React.ReactNode;
}

function List({ children }: Props) {

  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
};

export default List;
  