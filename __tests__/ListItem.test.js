import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from '@/app/components/ListItem';
import data from './__mock__/test_data.json';

describe('Testing ListItem component', () => {
  it('should render the ListItem component', () => {

    const character = data[0];
    const characterInfo = [
      {
        label: 'Gender',
        accessor: 'gender'
      },
      {
        label: 'Birth Year',
        accessor: 'birth_year'
      }
    ]

    render(
      <ListItem
        data={character}
        header='name'
        slug='/4'
        info={characterInfo}
      />
    );

    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(`${characterInfo[0].label}:`)).toBeInTheDocument();
    expect(screen.getByText(`${characterInfo[1].label}:`)).toBeInTheDocument();
    expect(screen.getByText(character[characterInfo[0].accessor])).toBeInTheDocument();
    expect(screen.getByText(character[characterInfo[1].accessor])).toBeInTheDocument();
  });
});
