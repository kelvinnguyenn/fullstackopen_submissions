import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
  <div>
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
  </div>
  )
}

const Button = ({ handleClick, text }) => 
  (  <button onClick={handleClick}>    
  { text}  
  </button>)

const Header = ({text}) => (
  <h1> {text} </h1>
)

const Statistics = ({ good, neutral, bad, total }) => {
  if (total == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const Average = (good, bad, total) => (((good * 1) + (bad * -1)) / total)

  const Positive = (good, total) => (good / total) * 100

  return (
    <table>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={total}/>
      <StatisticLine text='average' value={Average(good, bad, total)}/>
      <StatisticLine text='positive' value={Positive(good, total) + ' %'}/>
    </table>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setTotal(good + updatedNeutral + bad)
  }

  const handleBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setTotal(good + neutral + updatedBad)
  }




  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Header text='statistics' />
      <Statistics good={good} total={total} bad={bad} neutral={neutral} />
      {/* <Header text='statistics' />
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={Average(good, bad, total)} />
      <StatisticLine text='positive' x} /> */}
    </div>
  )
}

export default App