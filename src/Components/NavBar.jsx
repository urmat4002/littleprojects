import {Container, Nav, Navbar} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/counter')}>Counter</Nav.Link>
          <Nav.Link onClick={() => navigate('/users')}>Users</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
