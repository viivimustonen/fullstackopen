import { useState } from 'react'

const StatisticsLine = (props) => {
  return(
    <p>
      {props.text} {props.value}
    </p>
  )   
 }

const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return <p>No feedback given</p>
  } else{
    return (
      <div>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.bad + props.neutral + props.bad} />
        <StatisticsLine text="average" value={(props.good * 1 + props.neutral * 0 + props.bad * (-1)) / (props.good + props.neutral + props.bad)} />
        <StatisticsLine text="positive %" value={props.good / (props.good + props.neutral + props.bad) * 100} />
      </div>
    )   
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
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