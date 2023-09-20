import { usePathname } from 'next/navigation'

const useActivePath = (currentPath: string) => {
  const pathname = usePathname();
  const active = currentPath === pathname;

  return active;
};

export default useActivePath;