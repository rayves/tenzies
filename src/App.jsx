import './App.css';
import Die from './assets/components/Die';

function App() {
  let i = 1;

  const values = [...Array(10).keys()].map((die) => {
    if (i > 6) i = 1;
    if (die > 5) {
      const newNumber = 0 + i;
      i++;
      return newNumber;
    }
    return die + 1;
  });

  const dice = values.map((die) => <Die value={die} />);

  const allNewDice = () => {
    return [...Array(10).keys()].map((die) => {
      return Math.ceil(Math.random() * 6);
    });
  };

  console.log(allNewDice());

  return (
    <main>
      <div className="die-container">{dice}</div>
    </main>
  );
}

export default App;
