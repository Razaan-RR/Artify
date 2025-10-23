import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
