import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Esquenta', 'Estudar Course', 'Aula ao vivo', 'Forms de Feedback', 'Fechamento'];

class App extends React.Component  {
  render() {
  return (
    <ul>{tasks.map((task) => Task(task))}</ul>
  );
}
}

export default App;
