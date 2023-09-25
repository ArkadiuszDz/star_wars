'use client'

import React from 'react';
import useFetchMultiple from '@/app/hooks/useFetchMultiple';

interface Props {
  url: string | string[];
  children: React.ReactElement;
}

function AsyncData<T>({ url, children }: Props) {
  const data = useFetchMultiple<T>(url);

  return (
    <>
      {
        React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, { data });
        })
      }
    </>
  );
};

export default AsyncData;