import {Container} from 'react-bootstrap'
import './App.css'
import {Counter} from './pages/counter'
import {Users} from './pages/users'

function App() {
  return (
    <Container>
      <Counter />
      <Users />
    </Container>
  )
}

export default App
