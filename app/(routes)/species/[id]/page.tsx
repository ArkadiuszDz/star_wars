import React from 'react';

interface Props {
  params: {
    id: number;
  }
}

const Species: React.FC<Props> = ({ params: { id }}) => {
  return (
    <div>
      Species {id}
    </div>
  );
};

export default Species;