import React from 'react';
import Dropdown from './component/Dropdown';
import './App.css';

const App = () => {
  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="app-container">
      <h1 className="app-title">Select Option</h1>
      <div className="content-container">
        
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default App;
