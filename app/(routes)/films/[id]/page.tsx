import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Film: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Film {id}
    </div>
  );
};

export default Film;