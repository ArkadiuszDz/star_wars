import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Character: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Character {id}
    </div>
  );
};

export default Character;