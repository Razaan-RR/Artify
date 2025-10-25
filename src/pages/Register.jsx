import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const from = location.state?.from?.pathname || '/'

function Register() {
  const { createUser, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        // console.log('Google user:', user)
        toast.success('Google Sign-up successful!')
        navigate('/', { replace: true })
      })
      .catch((error) => {
        console.error('Google sign-up error:', error.message)
        toast.error('Google sign-up failed. Try again.')
      })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photo.value
    const password = form.password.value
    setError('')

    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.')
      return toast.error('Password must contain at least one uppercase letter.')
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.')
      return toast.error('Password must contain at least one lowercase letter.')
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return toast.error('Password must be at least 6 characters long.')
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            toast.success('Registration successful!')
            navigate(from, { replace: true })
          })
          .catch((err) => {
            console.error('Profile update error:', err)
            toast.error('Profile update failed.')
          })
      })
      .catch((error) => {
        console.error('Registration error:', error.message)
        setError(error.message)
        toast.error('Registration failed. Try again.')
      })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label mt-2">Password</label>
            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered w-full pr-10 focus:outline-none z-0"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black z-10"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-9 0-1.042.178-2.046.513-3M3 3l18 18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 9.879a3 3 0 104.242 4.242"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Register
            </button>

            <div className="divider">OR</div>
            <button
              onClick={handleGoogleRegister}
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="font-semibold text-center pt-4">
              Already Have An Account?{' '}
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default Register
