import './App.css';
import Header from './feautures/header/header';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Cards/>
      </body>
    </div>
  );
}

export default App;
