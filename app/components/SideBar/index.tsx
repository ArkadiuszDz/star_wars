import NavLink from '@/app/components/NavLink';
import navLinks from '@/app/utils/navigation';

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
