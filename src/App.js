import logo from './logo.svg';
import './App.css';
import React from 'react';

/// Have this output the value for each item in the array in the following loops.
const printArrays = (arrayType) {
  const arr = ["A", "B", "C"];

  let returnVal = "";

  switch (arrayType) {
    case 1:
      for (var i = 0; i < arr.length; i++)
        returnVal += `${arr[i]} `;
      break;
    case 2:
      for (item in arr)
        returnVal += `${item} `
      break;
    case 3:
      for (item of arr)
        returnVal += `${item} `
      break;
    case 4:
      arr.forEach(item => {
        returnVal += `${item} `
      });
      break;
  }

  return returnVal;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>1: {printArrays(1)}</p>
          <p>2: {printArrays(2)}</p>
          <p>3: {printArrays(3)}</p>
          <p>4: {printArrays(4)}</p>
        </header>
      </div>
    );
  }
}

export default App;
