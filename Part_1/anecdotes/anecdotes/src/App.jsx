import { useState } from 'react'
import Button from './Button'

const MostVoted = ({points,anecdotes})=>{
  const maxVotes=Math.max(...points)
  const indexMostVoted=points.indexOf(maxVotes)
  console.log(indexMostVoted)
  if(maxVotes===0 )
     {return <div>No votes yet</div>}
  else
  {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexMostVoted]}</p>
      <p>Has {maxVotes}votes</p>
    </div>
  )}
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  console.log()

   const getInspiration =()=>{
    let randomNumber=Math.floor(Math.random()*anecdotes.length)
    console.log(randomNumber)
    return setSelected(randomNumber)}
    
   const voting=()=>{
    const updatedPoints = [...points]; // Create a copy of the current points array
    updatedPoints[selected] += 1; // Increment the vote count for the selected anecdote
    console.log(updatedPoints)
    return setPoints(updatedPoints);

   }
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  


  return (
    <> 
    <div>
      {anecdotes[selected]}
    </div>
    <Button value="Next inspiration" onClick={getInspiration}/>
    <p>{points[selected]}</p>
    <Button value="Vote" onClick={voting}/>
    <MostVoted points={points} anecdotes={anecdotes}/>
  </>
    
  )
}

export default App