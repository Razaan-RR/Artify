import { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

function Register() {
  const handleGoogleRegister = () => {
    console.log('Google login clicked')
    //  Will later integrate Firebase Google Auth
  }
  const { createUser, setUser } = use(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault()
    console.log(e.target)
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photo.value
    const password = form.password.value
    console.log({ name, email, photo, password })
    createUser(email, password)
      .then((result) => {
        const user = result.user
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
        // ..
      })
  }
  return (
    <div>
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

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>

              <div className="divider">OR</div>
              <button
                onClick={handleGoogleRegister}
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
      </div>
    </div>
  )
}

export default Register
