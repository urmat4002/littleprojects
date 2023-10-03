import {Card, Image} from 'react-bootstrap'

export const UserList = ({
  displayUsers,
  invitedUsers,
  deleteHandle,
  addHandle,
}) => {
  return (
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
            <div style={{cursor: 'pointer'}} onClick={() => addHandle(item.id)}>
              +
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
