import {useEffect, useState} from 'react'
import {
  Button,
  Card,
  Container,
  Form,
  Image,
  InputGroup,
  ListGroup,
} from 'react-bootstrap'
import {fetchDevices} from '../http/deviceApi'

export const Users = () => {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  const [displayUsers, setDisplayUsers] = useState([])
  const [invitedUsers, setInvitedUsers] = useState([])
  useEffect(() => {
    fetchDevices().then((data) => {
      setUsers(data)
      setDisplayUsers(data)
    })
  }, [])

  useEffect(() => {
    const data = users.filter((item) => item.first_name.includes(input))
    setDisplayUsers(data)
  }, [input])

  const addHandle = (id) => {
    setInvitedUsers([...invitedUsers, id])
    console.log(invitedUsers)
  }
  const deleteHandle = (id) => {
    const filtered = invitedUsers.filter((item) => id !== item)
    setInvitedUsers(filtered)
  }
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Card style={{width: '350px', padding: '10px'}}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control onChange={(e) => setInput(e.target.value)} />
        </InputGroup>
        <Button style={{margin: '10px'}}>Send invite</Button>
      </Card>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {displayUsers.map((item, index) => (
          <Card
            key={index}
            style={{margin: '10px', padding: '10px', width: '200px'}}
          >
            <div style={{width: '50px'}}>
              <Image
                style={{width: '100%', borderRadius: '50%'}}
                key={index}
                src={item.avatar}
              />
            </div>
            <div>
              <h4>{item.first_name + ' ' + item.last_name}</h4>
              <p>{item.email}</p>
            </div>
            {invitedUsers.includes(item.id) ? (
              <div
                style={{cursor: 'pointer'}}
                onClick={() => deleteHandle(item.id)}
              >
                -
              </div>
            ) : (
              <div
                style={{cursor: 'pointer'}}
                onClick={() => addHandle(item.id)}
              >
                +
              </div>
            )}
          </Card>
        ))}
      </div>
    </Container>
  )
}
