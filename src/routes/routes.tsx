import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from '../components/Layouts/DefaultLayout'

import Home from '../pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
