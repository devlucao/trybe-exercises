// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';
import Image from './Image';

class App extends React.Component {
  render() {
    const products = [

      {
        name: 'headphone',
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
  
      {
        name: 'Energy Drink',
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
    },
  ]

    return (
      <section>
        <div className="App">
          <h1> Exercício 1 </h1>
          <h2> Image </h2>
          <Image 
            source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" 
            alternativeText="cute-cat"
          />
        </div>
        <div>
          <h1>Exercícios 2 e 3</h1>
          <p> Exercício 2 - Renderizar orders; Exercício 3 - Criar componentes dinamicamente</p>
          <h2>Orders recently created</h2>      
            { products.map((prod) => <Order order={ prod } />)}        
        </div>
      </section>
    );
  }
}

export default App;