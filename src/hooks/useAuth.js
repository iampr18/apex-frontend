import { useEffect, useState } from 'react'
import authService from '../api/services/authService.js'
import { clearTokens, setAccessToken } from '../utils/storage.js'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function bootstrap() {
    try {
      const res = await authService.me()
      setUser(res.data.user)
    } catch {
      clearTokens()
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { bootstrap() }, [])

  async function login(email, password) {
    const res = await authService.login(email, password)
    setAccessToken(res.data.accessToken)
    await bootstrap()
  }

  async function logout() {
    await authService.logout()
    clearTokens()
    setUser(null)
  }

  return { user, loading, login, logout }
}
