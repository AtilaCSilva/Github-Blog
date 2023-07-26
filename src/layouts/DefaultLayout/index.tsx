import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function Default() {
  return (
    <div className="flex flex-col bg-base-bg ">
      <Header />
      <Outlet />
    </div>
  )
}
