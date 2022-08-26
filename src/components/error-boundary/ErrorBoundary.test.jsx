import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('Error Boundary', () => {
  const Child = () => {
    throw new Error();
  };
  it(`should render error boundary`, () => {
    const getComponent = () =>
      render(
        <ErrorBoundary>
          <div>test error</div>
        </ErrorBoundary>
      );
    const { getByText } = getComponent({});
    expect(getByText('test error')).toBeTruthy();
  });
  it(`should render error boundary with error`, () => {
    const getComponent = () =>
      render(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      );
    const { getByText } = getComponent({});
    expect(getByText('Something went wrong')).toBeTruthy();
  });
});
