import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import { Router, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';



describe('App', () => {

  const history = createMemoryHistory();
    it('should show something', () => {
        const history = createMemoryHistory();
        const route = '/';
        history.push(route);
        render(
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route path="/something/sms/:id" element={<div>render page</div>} />
                </Routes>
            </Router>
        );
        expect(screen.getByText(/9393/i));
    });


  it('Should render main page', () => {
    history.push('/');
    const getComponent = () =>
        render(
            <Router history={history}>

                <App />

            </Router>
        );
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });

});
