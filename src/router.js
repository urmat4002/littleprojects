import {Converter} from './pages/Converter'
import {Counter} from './pages/counter'
import {Home} from './pages/Home'

import {Users} from './pages/users'

export const publicRoutes = [
  {path: '/', element: <Home />},
  {path: '/users', element: <Users />},
  {path: '/counter', element: <Counter />},
  {path: '/converter', element: <Converter />},
]
