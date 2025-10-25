import { useContext, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

function Login() {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [showPassword, setShowPassword] = useState(false)

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        // console.log('Google user:', user)
        toast.success('Google Login successful!')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Google login error:', error.message)
        toast.error('Google login failed. Try again.')
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    setError('')

    signIn(email, password)
      .then((result) => {
        const user = result.user
        // console.log('Logged in:', user)
        toast.success('Login successful!')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Login error:', error.message)
        setError('Invalid email or password.')
        toast.error('Login failed. Please check your credentials.')
      })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Login your account
        </h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />

            <label className="label mt-2">Password</label>
            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered w-full pr-10 focus:outline-none z-0"
                placeholder="Password"
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

            <div className="text-right mt-1">
              <Link
                to={`/auth/forgot-password?email=${encodeURIComponent(
                  document.querySelector('input[name="email"]')?.value || ''
                )}`}
                className="link link-hover text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>

            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
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
              Don't Have An Account?{' '}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default Login
