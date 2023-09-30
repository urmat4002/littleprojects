import {useEffect, useState} from 'react'
import {Button, Card, Form, Image, InputGroup, ListGroup} from 'react-bootstrap'
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

  const searchChange = () => {}

  const addHandle = (id) => {
    setInvitedUsers([...invitedUsers, id])
    console.log(invitedUsers)
  }
  const deleteHandle = (id) => {
    const filtered = invitedUsers.filter((item) => id !== item)
    setInvitedUsers(filtered)
  }
  return (
    <Card style={{width: '350px'}}>
      <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control onChange={(e) => setInput(e.target.value)} />
        </InputGroup>

        <ListGroup as="ul">
          {displayUsers.map((item, index) => (
            <ListGroup.Item
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: '',
              }}
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
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button style={{margin: '10px'}}>Send invite</Button>
      </Card.Body>
    </Card>
  )
}
