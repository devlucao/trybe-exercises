import React, { Component } from 'react';

function december() {
  console.log('Em Dezembro de 81 botou os ingleses na roda')
}

function placarMundial() {
  console.log('3x0 no Liverpool ficou marcado na história')
}

function maiorDoRio() {
  console.log('E no Rio não tem outro igual, só o FLAMENGO é campeão mundial!')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={december}>Parte 1</button>
        <button onClick={placarMundial}>Parte 2</button>
        <button onClick={maiorDoRio}>Parte 3</button>
      </div>
    );
  }
  }

export default App;
