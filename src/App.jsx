import { useState, useEffect } from 'react';
import './App.css';
import Die from './assets/components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const matchValue = dice[0].value;
    const tenzieCheck = dice.every((die) => {
      return die.isHeld && die.value === matchValue;
    });
    if (tenzieCheck) {
      console.log('You won!');
      setTenzies(true);
    }
  }, [dice]);

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

  function counter() {
    setCount((prevCount) => prevCount + 1);
  }

  function resetGame() {
    setDice(allNewDice());
    setTenzies(false);
    setCount(0);
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <p>Number of Rolls: {count}</p>
      <button
        className="roll-dice"
        onClick={() => {
          rollDice();
          counter();
          tenzies && resetGame();
        }}
      >
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
