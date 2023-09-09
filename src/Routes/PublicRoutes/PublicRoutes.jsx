import { Outlet } from 'react-router-dom'

export default function PublicRoutes({ ...props }) {
  return <Outlet {...props} />
}
