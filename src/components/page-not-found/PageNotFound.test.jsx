import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
    const history = createMemoryHistory();
    const getComponent = () =>
        render(
            <Router navigator={history}>
                <PageNotFound />
            </Router>
        );
    it('Should render correctly', () => {
        expect(getComponent().asFragment()).toMatchSnapshot();
    });
});