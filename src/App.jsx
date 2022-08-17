import { useState } from 'react';
import './App.css';
import Die from './assets/components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die} />
  ));

  function allNewDice() {
    return [...Array(10).keys()].map((die) => {
      return Math.ceil(Math.random() * 6);
    });
  }

  return (
    <main>
      <div className="die-container">{diceElements}</div>
    </main>
  );
}

export default App;
