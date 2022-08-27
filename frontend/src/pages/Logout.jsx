import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../components/LoadingModal'
import { useAuth } from '../context/AuthContext'

export default function Logout () {
  const navigate = useNavigate()
  const loading = useLoading()
  const { logout } = useAuth()

  useEffect(() => {
    loading(true)
    logout(() => {
      navigate('/')
      loading(false)
    })
  })

  return null
}
