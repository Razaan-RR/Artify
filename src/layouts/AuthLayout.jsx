import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function AuthLayout() {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className='w-11/12 mx-auto py-5'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AuthLayout
