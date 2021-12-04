import './App.css';
import React, { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const AppStyle = {
      backgroundColor : '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 60px',
      width: 'initial'
  };
  const Header = {
    fontSize: '100px',
    margin:'10px 0'
  }
  function incr() {
    setCount(prev => prev+1)
  }
  function decr() {
    setCount(prev => prev-1)
  }
  function resert() {
    setCount(prev => 0)
  }
  return (
    <div className="App" style={AppStyle}>
      <h1 style={Header}>{count}</h1>
      <div>
        <button 
        className="btn border border-success text-success mx-1" 
        onClick={incr}>+</button>
        <button 
        className="btn border border-danger text-danger mx-1" 
        onClick={decr}>-</button>
        <button
        className="btn border text-warning border-warning mx-1"
        onClick={resert}>resert</button>
      </div>
    </div>
  );
}

export default App;
