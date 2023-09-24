import NavLink from '@/app/components/NavLink';
import navLinks from '@/app/utils/navigation';

import styles from './SideBar.module.scss';

function SideBar() {
  return (
    <nav className={styles.nav}>
      {
        navLinks.map(link => {
          return (
            <NavLink key={link.slug} label={link.label} url={link.slug} />
          );
        })
      }
    </nav>
  );
};

export default SideBar;
