import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'
import { getAuth } from 'firebase/auth'
import LoadingSpinner from '../components/LoadingSpinner'

const auth = getAuth()

function Profile() {
  const { user, setUser, loading } = useContext(AuthContext)
  const navigate = useNavigate()
  const toastShown = useRef(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
  })
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (!loading && !user && !toastShown.current) {
      toastShown.current = true
      toast.error('You must be logged in to access the Profile page.', {
        duration: 3000,
      })
      navigate('/auth/login', { state: { from }, replace: true })
    }
  }, [user, loading, navigate, from])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      if (!auth.currentUser) throw new Error('No logged in user')

      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      })

      setUser({
        ...user,
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      })

      toast.success('Profile updated successfully!')
      setIsEditing(false)
    } catch (error) {
      console.error('Firebase updateProfile error:', error.message)
      toast.error(`Failed to update profile. ${error.message}`)
    }
  }

  return (
    <div className="max-w-full sm:max-w-3xl mx-auto mt-10 p-4 sm:p-6 bg-white shadow-md rounded-lg overflow-x-hidden">
      <Toaster position="top-center" />
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-left sm:text-center">
        My Profile
      </h1>

      <div className="flex flex-col items-start sm:items-center gap-4 sm:gap-6">
        <img
          src={user.photoURL || 'https://i.ibb.co/4YQ0t6J/default-user.png'}
          alt={user.displayName || 'User'}
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-gray-300"
        />

        {!isEditing ? (
          <>
            <div className="w-full">
              <h2 className="text-base sm:text-lg font-semibold">Name</h2>
              <p className="text-gray-700">{user.displayName || 'Not Set'}</p>
            </div>

            <div className="w-full">
              <h2 className="text-base sm:text-lg font-semibold">Email</h2>
              <p className="text-gray-700 break-all">{user.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary mt-2 sm:mt-4 w-32 sm:w-1/2 text-sm sm:text-base"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="w-full flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-4"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="input input-bordered w-full text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Profile Image URL
              </label>
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                className="input input-bordered w-full text-sm"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
              <button
                type="submit"
                className="btn btn-success w-full sm:w-1/2 min-w-0 text-sm"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-outline w-full sm:w-1/2 min-w-0 text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Profile
