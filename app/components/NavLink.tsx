'use client'

import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import useActivePath from '../hooks/useActivePath';

interface Props {
  label: string;
  url: string;
}

const NavLink: React.FC<Props> = ({ label, url }) => {

  const isActivePath = useActivePath(url);

  return (
    <Link
      className={cn('block p-1', {'bg-blue-700 text-3xl': isActivePath})}
      href={url}
    >
      {label}
    </Link>
  );
};

export default NavLink;