import { Route, Routes } from 'react-router-dom'
import { Default } from './layouts/DefaultLayout'
import { Home } from './screens/Home'
import { Post } from './screens/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<Post />} />
      </Route>
    </Routes>
  )
}
