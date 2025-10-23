import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import usericon from '../assets/user-icon.png'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'

function Navbar() {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    console.log('user trying to logout')
    logOut()
      .then(() => {
        alert('You are logged out')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="px-10 py-5 flex justify-between items-center">
      <img className="w-[50px]" src={logo} alt="" />
      <div className="nav flex gap-5">
        <NavLink
          className="text-gray-800 hover:text-blue-500 hover:underline transition-colors duration-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-gray-800 hover:text-blue-500 hover:underline transition-colors duration-200"
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className="button flex gap-5 items-center">
        <img className="w-[50px]" src={usericon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-neutral px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-soft btn-primary">
            Login
          </Link>
        )}
        {user ? (
          ' '
        ) : (
          <Link to="/auth/register" className="btn btn-soft btn-primary">
            Sign-up
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
