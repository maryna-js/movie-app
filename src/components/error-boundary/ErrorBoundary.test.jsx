import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('Error Boundary', () => {

  it(`should render error boundary`, () => {
      render(
        <ErrorBoundary>
          <div>test error</div>
        </ErrorBoundary>
      );
    expect(screen.getByText(/test error/i)).toBeTruthy();
  });
  it(`should render error boundary with error`, () => {
      const Child = () => {
          throw new Error();
      };
      console.error = jest.fn();
      render(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      );
    expect(screen.getByText(/something went wrong/i)).toMatchSnapshot();
  });
});
