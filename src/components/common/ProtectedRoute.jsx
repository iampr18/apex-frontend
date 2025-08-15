import { Navigate } from 'react-router-dom'
import { getAccessToken } from '../../utils/storage.js'

export default function ProtectedRoute({ children }) {
  return getAccessToken() ? children : <Navigate to="/login" replace />
}
