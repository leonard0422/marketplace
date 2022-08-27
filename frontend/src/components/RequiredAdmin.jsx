import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequiredAdmin ({ children }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) {
      if (user === undefined) { return navigate('/') }
      if (user && user.user.role !== 0) { return navigate('/') }
    }
  }, [user])

  return children
}
