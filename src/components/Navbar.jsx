import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
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
      <img className="w-[50px]" src={logo} alt="Logo" />

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

      <div className="flex gap-5 items-center">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || 'https://i.ibb.co/4YQ0t6J/default-user.png'}
                alt={user.displayName || 'User'}
                className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-gray-300"
              />
              {/* Tooltip */}
              <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName || 'User'}
              </span>
            </div>

            <button onClick={handleLogOut} className="btn btn-neutral px-6">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/auth/login" className="btn btn-soft btn-primary">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-soft btn-primary">
              Sign-up
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
