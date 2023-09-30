import {Container} from 'react-bootstrap'
import './App.css'
import {NavBar} from './Components/NavBar'
import {Routing} from './Components/Routing'
import {Counter} from './pages/counter'
import {Users} from './pages/users'

function App() {
  return (
    <>
      <NavBar />
      <Routing />
    </>
  )
}

export default App
