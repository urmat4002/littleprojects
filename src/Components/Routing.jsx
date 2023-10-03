import {Route, Routes} from 'react-router-dom'

import {publicRoutes} from '../router'

export const Routing = () => {
  return (
    <Routes>
      {publicRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}
