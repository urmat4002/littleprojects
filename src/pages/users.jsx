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
import {Invite} from '../Components/Users/inviteComponent'
import {UserList} from '../Components/Users/UsersList'
import {fetchDevices} from '../http/deviceApi'

export const Users = () => {
  const [success, setSuccess] = useState(false)
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
  }
  const deleteHandle = (id) => {
    const filtered = invitedUsers.filter((item) => id !== item)
    setInvitedUsers(filtered)
  }
  return (
    <Container>
      {success ? (
        <Invite setSuccess={setSuccess} invitedUsers={invitedUsers} />
      ) : (
        <div
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
            <Button style={{margin: '10px'}} onClick={() => setSuccess(true)}>
              Send invite
            </Button>
          </Card>

          <UserList
            addHandle={addHandle}
            displayUsers={displayUsers}
            invitedUsers={invitedUsers}
            deleteHandle={deleteHandle}
          />
        </div>
      )}
    </Container>
  )
}
