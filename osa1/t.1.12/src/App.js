import { useState } from 'react'

//latest version: 1.14 step3
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint16Array(anecdotes.length))
  const [mostVotes, setMostVotes] = useState(0)

  function randomInt(max) {
    return Math.floor(Math.random()* max)
  }

  function setVote(selected,points) {

    const copy = [...points ]
    copy[selected] += 1;
    setPoints(copy);

    if(copy[selected] > copy[mostVotes]) {
      setMostVotes(selected);
     }
  }
  
  return (
    <>
    <h1>Anecdote of the day</h1>
    <div> {anecdotes[selected]} </div>

    <div> votes {points[selected]}</div>

    <div>
      
      <button onClick={() => setSelected(randomInt(anecdotes.length))}>
        next anecdote
      </button>

      <button onClick={() => setVote(selected, points)}>
        vote
      </button>
      <h1>Anectode with most votes</h1>
      <div>{anecdotes[mostVotes]}</div> 
      has {points[mostVotes]} votes 
    </div>
    </>
  )
}

export default App

