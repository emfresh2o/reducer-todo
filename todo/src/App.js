import React from 'react';
import './App.css';
import { Completed } from './components/Completed';

function App() {
  return (
    <div className='wrapper'>
      <h1 style={{ color: 'white', alignText: 'center' }}>Reducer Todo App</h1>
      <Completed />
    </div>
  );
}

export default App;
