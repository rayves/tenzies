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
      return newDie();
    });
  }

  function newDie() {
    const randomNum = Math.ceil(Math.random() * 6);
    return {
      id: nanoid(),
      value: randomNum,
      isHeld: false,
    };
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : newDie();
      }),
    );
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
