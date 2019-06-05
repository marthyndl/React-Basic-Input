import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termino: '',
    };
  }

  render() {
    const { termino } = this.state;

    return (
      <Fragment>
        <hr />
        Buscar: <input 
        value={termino}
        onChange={(e) => this.setState({ termino: e.target.value })}/>
        <hr />
        <h3>Tu termino de busqueda "{termino}" no tiene resultados.</h3>
        <button
          onClick={() => this.setState({ termino: '' })}
        >Reiniciar</button>
        <hr />
        <img src={logo} className="App-logo" alt="logo" />
      </Fragment>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
