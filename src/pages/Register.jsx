import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

function Register() {
  const { createUser, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log('Google user:', user)
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
            navigate('/')
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
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

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
