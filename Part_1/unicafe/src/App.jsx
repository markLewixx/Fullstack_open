import { useState } from 'react'
import Feedback from './Feedback'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
 
  return (
    <div>
      <Feedback good={good} neutral={neutral} bad={bad}></Feedback>
      <Button value="good" onClick={()=>{setGood(good+1);console.log(good+1,neutral,bad)}}/>
      <Button value="neutral" onClick={()=>{setNeutral(neutral+1); console.log(good,neutral+1,bad)}}/>
      <Button value="bad" onClick={()=>{setBad(bad+1);console.log(good,neutral,bad+1)}}/>
      <h1>STATISTICS</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div> 
  )
}

export default App