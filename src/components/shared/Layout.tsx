import { Outlet } from 'react-router-dom'
import Slidebar from './Slidebar.jsx'
import Header from './Header.js'

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen
    overflow-hidden'>
      <Slidebar/>
      <div className='p-4 w-full'>
        <Header/>
      {<Outlet />}
      </div>
    </div>
  )
}

export default Layout