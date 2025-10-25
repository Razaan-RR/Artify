import { createBrowserRouter } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import HomeLayout from '../layouts/HomeLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Profile from '../pages/Profile'
import CourseDetails from '../pages/CourseDetails'
import ProtectedRoute from '../components/ProtectedRoute'
import ForgotPassword from '../pages/ForgotPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('./SkillListings.json'),
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/course/:id',
        element: (
          <ProtectedRoute>
            <CourseDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: '/*',
    element: (
      <h1 className="text-center text-3xl font-bold mt-60">Error! Page Does Not Exist!!!</h1>
    ),
  },
])

export default router
