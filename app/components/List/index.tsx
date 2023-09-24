import React from 'react';

interface Props {
  children: React.ReactNode;
}

function List({ children }: Props) {

  return (
    <ul className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 grid-rows-3 gap-2">
      {children}
    </ul>
  );
};

export default List;
  