import { Outlet } from 'react-router'

import Header from '../Header/index'

export const DefaultLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
