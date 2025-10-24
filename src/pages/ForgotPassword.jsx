import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import app from '../firebase/firebase.config'
import toast, { Toaster } from 'react-hot-toast'

const auth = getAuth(app)

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Extract email from query params if passed
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const emailParam = params.get('email')
    if (emailParam) setEmail(emailParam)
  }, [location])

  const handleResetPassword = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email.')
      return
    }

    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('Password reset email sent! Redirecting to Gmail...')
      setTimeout(() => {
        window.location.href = 'https://mail.google.com'
      }, 2000)
    } catch (error) {
      console.error('Reset error:', error.message)
      toast.error('Error sending reset email.')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-4">
          Reset Your Password
        </h2>

        <form onSubmit={handleResetPassword} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>

            <p className="text-center mt-3">
              Remembered your password?{' '}
              <a
                onClick={() => navigate('/auth/login')}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </a>
            </p>
          </fieldset>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  )
}

export default ForgotPassword
