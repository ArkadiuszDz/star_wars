import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Vehicle: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Vehicle {id}
    </div>
  );
};

export default Vehicle;