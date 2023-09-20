import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Planet: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Planet {id}
    </div>
  );
};

export default Planet;