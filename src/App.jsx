import './App.css';
import Button from './components/button.jsx';
import Count from './components/count.jsx';
import { React, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count+1);
  };

  const decrement = () => {
    setCount(count => count-1);
  };

  const reset = () => {
    setCount(0);
  }
  
  return (
    <div className="main-container">
      <h2 className="heading">Ayush's Counter Page</h2>
      <Count value={count} />
      <div className="button-container">
        <Button value="Increment" onClick={increment} />
        <Button value="Reset" onClick={reset} />
        <Button value="Decrement" onClick={decrement} />
      </div>
    </div>
  )
}
