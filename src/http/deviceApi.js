import axios from 'axios'

export const fetchDevices = async () => {
  const {data} = await axios.get('https://reqres.in/api/users')
  return data.data
}
