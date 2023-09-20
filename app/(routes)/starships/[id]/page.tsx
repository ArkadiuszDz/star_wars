import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Starship: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Starship {id}
    </div>
  );
};

export default Starship;