import { createBrowserRouter } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import HomeLayout from '../layouts/HomeLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Profile from '../pages/Profile'
import CourseDetails from '../pages/CourseDetails'

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
        element: <Courses></Courses> ,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
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
    ],
  },
  {
    path: '/*',
    element: <h2>Error</h2>,
  },
])

export default router
