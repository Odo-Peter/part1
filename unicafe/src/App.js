import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {props.text} {props.value}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good !== 0 || bad !== 0 || neutral !== 0) {
    return (
      <div>
        <h2>Statistics</h2>

        <StatisticLine text={'Good'} value={good} />
        <StatisticLine text={'Neutral'} value={neutral} />
        <StatisticLine text={'Bad'} value={bad} />
        <StatisticLine text={'All'} value={good + bad + neutral} />
        <StatisticLine
          text={'Average'}
          value={(good + bad * -1) / (good + bad + neutral)}
        />
        <StatisticLine
          text={'Positive'}
          value={(good / (good + bad + neutral)) * 100 + '%'}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
};

const App = () => {
  //saving the clicks for each button
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={handleGood} text={'Good'} />
      <Button onClick={handleNeutral} text={'Neutral'} />
      <Button onClick={handleBad} text={'bad'} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
