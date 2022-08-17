import { useState } from 'react';
import './App.css';
import Die from './assets/components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die, index) => (
    <Die key={index} value={die.value} isHeld={die.isHeld} />
  ));

  function allNewDice() {
    return [...Array(10).keys()].map((die) => {
      const randomNum = Math.ceil(Math.random() * 6);
      return { value: randomNum, isHeld: false };
    });
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="die-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
