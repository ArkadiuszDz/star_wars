import NavLink from './NavLink';
import navLinks from '../utils/navigation';

function SideBar() {
  return (
    <nav>
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
