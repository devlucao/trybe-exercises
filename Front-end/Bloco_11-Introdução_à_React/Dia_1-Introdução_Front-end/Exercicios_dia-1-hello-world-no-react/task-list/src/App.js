import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Esquenta', 'Estudar Course', 'Aula ao vivo', 'Forms de Feedback', 'Fechamento', 'Happy Hour'];

class App extends Component  {
  render() {
  return (
    <ul>{tasks.map((task) => Task(task))}</ul>
  );
}
}

export default App;
