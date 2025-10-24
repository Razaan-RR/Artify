import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'

function Profile() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const toastShown = useRef(false)

  useEffect(() => {
    if (!user && !toastShown.current) {
      toastShown.current = true
      toast.error('You must be logged in to access the Profile page.', {
        duration: 3000,
      })
      navigate('/auth/login')
    }
  }, [user, navigate])

  if (!user) return null

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      <div className="flex flex-col items-center gap-6">
        <img
          src={user.photoURL || 'https://i.ibb.co/4YQ0t6J/default-user.png'}
          alt={user.displayName || 'User'}
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
        />

        <div className="w-full">
          <h2 className="text-lg font-semibold">Name</h2>
          <p className="text-gray-700">{user.displayName || 'Not Set'}</p>
        </div>

        <div className="w-full">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-gray-700">{user.email}</p>
        </div>

        <button className="btn btn-primary mt-4 w-full sm:w-1/2">
          Update Profile
        </button>
      </div>
    </div>
  )
}

export default Profile
