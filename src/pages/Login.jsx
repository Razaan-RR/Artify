import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router'
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

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log('Google user:', user)
        toast.success('Google Login successful!', { position: 'top-center' })
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Google login error:', error.message)
        toast.error('Google login failed. Try again.', {
          position: 'top-center',
        })
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    setError('')

    console.log({ email, password })
    signIn(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        console.error(error.message)
        setError('Invalid email or password.')
        toast.error('Login failed. Please check your credentials.', {
          position: 'top-center',
        })
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
              className="input"
              placeholder="Email"
            />

            <label className="label mt-2">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}

            <div className="text-right mt-1">
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>

            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
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
      <ToastContainer />
    </div>
  )
}

export default Login
