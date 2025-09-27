import { useState } from 'react'
import './App.css'
import Comp from './component.jsx';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="rootup"></div>
      <div className="rootdown"></div>
      <div className="middle">
        <Comp />
      </div>
    </div>
  );
}

export default App;
