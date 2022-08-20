import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
    <h1> Statistics </h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good + props.neutral + props.bad}</p>
        <p>average {(props.good*1 + props.neutral * 0 + props.bad * (-1))/(props.good + props.neutral + props.bad)}</p>
        <p>positive {(props.good/(props.good + props.neutral + props.bad))*100}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let allClicks = 0;

  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)
  
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
      <Statistics good = {good} setGood ={setGood} neutral = {neutral} setNeutral = {setNeutral} bad = {bad} setBad = {setBad} allClicks = {allClicks}></Statistics>
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

