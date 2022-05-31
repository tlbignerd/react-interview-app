import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

/// Have this output the value for each item in the array in the following loops.

const Arrays = React.lazy(() => import('./components/Arrays.js'));
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Suspense fallback={<div>Loading arrays...</div>}>
            <Arrays />
          </Suspense>
          <Suspense fallback={<div>Loading trees...</div>}>
            <Trees />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
