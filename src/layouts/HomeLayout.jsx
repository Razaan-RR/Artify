import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function HomeLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout
