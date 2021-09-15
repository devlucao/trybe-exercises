import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick() {
    console.log(this); // Para que a função enxergue o this é necessário realizar o bind dentro do constructor conforme linha 6. Sem o bind o console retorna undefined.
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log('Clicou')
  }

  december() {
    console.log('Em Dezembro de 81 botou os ingleses na roda')
  }
  
  placarMundial() {
    console.log('3x0 no Liverpool ficou marcado na história')
  }
  
  maiorDoRio() {
    console.log('E no Rio não tem outro igual, só o FLAMENGO é campeão mundial!')
  }
  render() {
    return (
      <div className="App">
        {/* Quando queremos chamar uma função que se encontra dentro da classe precisamos utilizar o .this */}
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <button onClick={this.december}>Parte 1</button>
        <button onClick={this.placarMundial}>Parte 2</button>
        <button onClick={this.maiorDoRio}>Parte 3</button>
      </div>
    );
  }
  }

export default App;
