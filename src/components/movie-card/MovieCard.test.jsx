import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
  const getComponent = ({
                          title = 'Sherlock Holmes',
                          type = 'movie',
                          year = '2018',
                          id = "1",
      poster="https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
  }) =>
    render(
      <MovieCard
          type={type}
          title={title}
          year={year}
          id={id}
          poster={poster}
      />
    );
  it('Should render component', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });
  it('Should call toggleCollapse', () => {
    const toggleCollapse = jest.fn();
    const { getByTestId } = getComponent({});
    fireEvent.click(getByTestId('collapse'));
    expect(toggleCollapse).toHaveBeenCalled();
  });
});
