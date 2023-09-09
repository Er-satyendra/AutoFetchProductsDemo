import { Route, Routes } from 'react-router-dom'
import Products from '@products/Pages/Products/Products'
import GENERAL_ROUTES from '@products/Routes/generalRoutes'
import PublicRoutes from '@products/Routes/PublicRoutes'

const ALL_ROUTES = [...GENERAL_ROUTES]

function CustomRoute() {
  return (
    <Routes>
      {ALL_ROUTES.map((route) => (
        <Route key={route.id} element={<PublicRoutes path={route.path} />}>
          <Route path={route.path} element={<route.component />} />
        </Route>
      ))}
      <Route path="*" element={<Products />} />
    </Routes>
  )
}

export default CustomRoute
