import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'

function Profile() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const toastShown = useRef(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
  })

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

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = async e => {
    e.preventDefault()
    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      })
      toast.success('Profile updated successfully!')
      setIsEditing(false)
    } catch (error) {
      console.error(error)
      toast.error('Failed to update profile. Try again.')
    }
  }

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

        {!isEditing ? (
          <>
            <div className="w-full">
              <h2 className="text-lg font-semibold">Name</h2>
              <p className="text-gray-700">{user.displayName || 'Not Set'}</p>
            </div>

            <div className="w-full">
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-700">{user.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary mt-4 w-full sm:w-1/2"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="w-full flex flex-col gap-4 mt-4"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Profile Image URL</label>
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn btn-success w-1/2">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-outline w-1/2"
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
