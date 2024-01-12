import React from 'react';
import './App.css';
import Header from './feautures/header/header';
import Cards from './components/Cards/cards';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <Cards/>
    </div>
  );
}

export default App;
