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
    <div>
      {/* {
        Array.isArray(state) && <ul>
          {
            state.map((e: T) => {
              return (
                <li key={e.name}>
                  {e.name}
                </li>
              );
            })
          }
        </ul>
      }
      {
        !Array.isArray(state) && state && (
          <p>Home planet: {state?.diameter}</p>
        )
      } */}
      {
        React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, { data });
        })
      }
    </div>
  );
};

export default AsyncData;