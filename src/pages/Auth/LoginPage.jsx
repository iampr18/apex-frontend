import { useState } from 'react'
import { Box, TextField, Button, Typography, Stack } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
// import Loader from '../../../components/common/Loader.jsx'
import Loader from '../../components/common/Loader.jsx'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { loading, login } = useAuth()

  if (loading) return <Loader />

  async function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await login(email, password)
      navigate('/home')
    } catch (err) {
      setError(err?.message || 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box sx={{ mt: 8, maxWidth: 420, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>Apex</Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <TextField label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" disabled={submitting}>Sign in</Button>
          <Button component={Link} to="/signup">Sign up</Button>
        </Stack>
      </form>
    </Box>
  )
}
