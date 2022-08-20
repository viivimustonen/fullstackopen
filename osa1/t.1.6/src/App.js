import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //const [allClicks, setAll] = useState([])
  let allClicks = 0;

  const increaseByOneGood = () => setGood(good + 1, allClicks + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1, allClicks + 1)
  const increaseByOneBad = () => setBad(bad + 1, allClicks + 1)
  
  return (
    <div>
      <h1> Give feedback </h1>
      
      <Button
        handleClick={increaseByOneGood}
        text='good'
      />
      <Button
        handleClick={increaseByOneNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseByOneBad}
        text='bad'
      />

      <h1> Statistics </h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good*1 + neutral * 0 + bad * (-1))/(good + neutral + bad)}</p>
      <p>positive {(good/(good + neutral + bad))*100}%</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

export default App

