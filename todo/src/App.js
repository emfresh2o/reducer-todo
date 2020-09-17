import React from 'react';
import './App.css';
import { TodoCompleted } from './components/TodoComplete';

function App() {
  return (
    <div className='wrapper'>
      <h1 style={{ color: 'white', alignText: 'center' }}>Reducer Todo App</h1>
      <TodoCompleted />
    </div>
  );
}

export default App;
