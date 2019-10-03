import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termino: '',
      numero: 123,
      bool: true,
    };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({
      termino: event
    });
  }

  click() {
    this.setState({ termino: '' })
  }

  render() {
    const { termino } = this.state;

    console.log('valor de variable: ',termino);

    return (
      <div className="Container">
        <hr />
        Buscar: 
        <input 
          value={termino}
          onChange={
            (event) => this.handlerChange(event.target.value)
          }
        />
        <hr />
        <h3>Tu termino de busqueda "{termino}" no tiene resultados.</h3>
        <button
          onClick={
            () => this.click()
          }
        >Reiniciar</button>
        <hr />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}



export default App;



/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termino: '',
      numero: 123,
      bool: true,
    };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({
      termino: event
    });
  }

  render() {
    const { termino } = this.state;

    return (
      <div className="Container">
        <hr />
        Buscar: 
        <input 
          value={termino}
          onChange={
            (event) => this.handlerChange(event.target.value)
          }
        />
        <hr />
        <h3>Tu termino de busqueda "{termino}" no tiene resultados.</h3>
        <button
          onClick={() => this.setState({ termino: '' })}
        >Reiniciar</button>
        <hr />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
} */