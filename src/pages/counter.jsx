import {useState} from 'react'
import {Button, Container} from 'react-bootstrap'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <Container
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h1>{count}</h1>
      <div>
        <Button onClick={() => setCount(count + 1)} style={{margin: '10px'}}>
          +
        </Button>
        <Button onClick={() => setCount(count - 1)} style={{margin: '10px'}}>
          -
        </Button>
      </div>
    </Container>
  )
}
