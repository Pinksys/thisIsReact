import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyImage from './MyImage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the image to change the animal
        </p>
        <MyImage />
      </header>
    </div>
  );
}

export default App;
