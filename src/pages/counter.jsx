import {useState} from 'react'
import {Button} from 'react-bootstrap'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)} style={{margin: '10px'}}>
        +
      </Button>
      <Button onClick={() => setCount(count - 1)} style={{margin: '10px'}}>
        -
      </Button>
    </>
  )
}
