import {Card, Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {publicRoutes} from '../router'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      {publicRoutes.map(
        (item, index) =>
          item.path.slice(1) && (
            <Card
              onClick={() => navigate(item.path)}
              key={index}
              style={{margin: '10px', padding: '20px', width: '300px'}}
            >
              <Card.Header>{item.path.slice(1)}</Card.Header>
            </Card>
          ),
      )}
    </Container>
  )
}
