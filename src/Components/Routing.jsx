import {Route, Routes} from 'react-router-dom'
import {Counter} from '../pages/counter'
import {Users} from '../pages/users'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}
