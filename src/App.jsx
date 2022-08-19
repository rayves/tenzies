import { useState } from 'react';
import './App.css';
import Die from './assets/components/Die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
    />
  ));

  function allNewDice() {
    return [...Array(10).keys()].map((die) => {
      const randomNum = Math.ceil(Math.random() * 6);
      return {
        id: nanoid(),
        value: randomNum,
        isHeld: false,
      };
    });
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDie(id) {
    setDice((prevDice) => {
      return prevDice.map((prevDie) => {
        return prevDie.id === id
          ? { ...prevDie, isHeld: !prevDie.isHeld }
          : prevDie;
      });
    });
  }

  console.table(dice);

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
