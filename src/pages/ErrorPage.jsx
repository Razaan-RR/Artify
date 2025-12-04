import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="bg-[#e9edf2] min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-700 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition-all"
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default ErrorPage
