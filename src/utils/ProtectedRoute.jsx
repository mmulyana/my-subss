import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const {email} = useSelector((s) => s.user)

  if (!email) {
    return <Navigate to="/signin" replace />
  }

  return children
}
