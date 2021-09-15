import React, { Component } from 'react';

class App extends Component {

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
    console.log(this);
    return (
      <div className="App">
        {/* Quando queremos chamar uma função que se encontra dentro da classe precisamos utilizar o .this */}
        <button onClick={this.december}>Parte 1</button>
        <button onClick={this.placarMundial}>Parte 2</button>
        <button onClick={this.maiorDoRio}>Parte 3</button>
      </div>
    );
  }
  }

export default App;
