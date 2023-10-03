import {Button, Card, Image} from 'react-bootstrap'

export const Invite = ({setSuccess, invitedUsers}) => {
  return (
    <Card style={{margin: '20px', padding: '10px', width: '300px'}}>
      <Image
        style={{borderRadius: '10px', margin: '10px'}}
        src="https://sm.pcmag.com/pcmag_me/review/m/microsoft-/microsoft-invite-for-iphone_juhj.jpg"
      />
      <Card.Title>You invited {invitedUsers.length} people</Card.Title>
      <Button onClick={() => setSuccess(false)}>Back</Button>
    </Card>
  )
}
