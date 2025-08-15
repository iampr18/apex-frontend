import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.jsx'
import Loader from './Loader.jsx'

export default function ProtectedRoute({ children }) {
  const { loading, user } = useAuth()
  if (loading) return <Loader />
  return user ? children : <Navigate to="/login" replace />
}
