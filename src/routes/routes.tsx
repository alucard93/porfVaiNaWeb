import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from '../components/Layouts/DefaultLayout'

import Home from '../pages/Home'
import Project from '../pages/Project'
import Contact from '../pages/Contact'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contacts" element={<Contact />} />
      </Route>
    </Routes>
  )
}
