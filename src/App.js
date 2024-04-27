import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  // const [values, setValues] = useState()

  const handleClick = () => {
    setCounter(counter + 1)
    // setValues(values.concat(counter))
  }

  return (
    <div className='container'>
      <h1>Hello, world!</h1>
      <button onClick={handleClick}>Click me!</button>
      <p>Counter: {counter}</p>
    </div>
  )
}
