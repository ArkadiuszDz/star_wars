'use client'

import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import useActivePath from '@/app/hooks/useActivePath';

import styles from './NavLink.module.scss';

interface Props {
  label: string;
  url: string;
}

const NavLink: React.FC<Props> = ({ label, url }) => {

  const isActivePath = useActivePath(url);

  return (
    <Link
      className={cn(styles.navlink, { [styles.active]: isActivePath })}
      href={url}
    >
      {label}
    </Link>
  );
};

export default NavLink;