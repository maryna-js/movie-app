import React from 'react';
import { RoutePaths } from './components/routes/Routes'
import './App.css';
import {ErrorBoundary} from "./components/error-boundary/ErrorBoundary";

const App = () => {
  return (
      <ErrorBoundary>
        <RoutePaths/>
      </ErrorBoundary>
  );
};

export default App;
