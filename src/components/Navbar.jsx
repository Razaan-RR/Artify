import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { AuthContext } from '../provider/AuthProvider'
import { useContext } from 'react'

function Navbar() {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    console.log('user trying to logout')
    logOut()
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="overflow-hidden px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center bg-white shadow-sm space-y-2 sm:space-y-0">
      <img className="w-[40px] sm:w-[50px]" src={logo} alt="Logo" />

      <div className="flex gap-3 sm:gap-5 text-sm sm:text-base">
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

      <div className="flex gap-3 sm:gap-5 items-start sm:items-center">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={
                  user.photoURL || 'https://i.ibb.co/4YQ0t6J/default-user.png'
                }
                alt={user.displayName || 'User'}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover cursor-pointer border border-gray-300"
              />
              <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName || 'User'}
              </span>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-neutral px-3 sm:px-6 text-sm sm:text-base"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn btn-soft btn-primary px-3 sm:px-5 text-sm sm:text-base"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-soft btn-primary px-3 sm:px-5 text-sm sm:text-base"
            >
              Sign-up
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
