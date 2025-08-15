import { useState } from 'react'
import { Box, TextField, Button, Typography, Stack, MenuItem } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'
// import authService from '../../../api/services/authService.js'
import authService from '../../api/services/authService'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dob, setDob] = useState(null)
  const [country, setCountry] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await authService.signup({
        name, email, password,
        dob: dob ? dayjs(dob).format('YYYY-MM-DD') : null,
        country
      })
      navigate('/login')
    } catch (err) {
      setError(err?.message || 'Signup failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box sx={{ mt: 8, maxWidth: 520, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>Create account</Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField label="Name" value={name} onChange={e=>setName(e.target.value)} required />
          <TextField label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <TextField label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(v)=>setDob(v)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </LocalizationProvider>
          <TextField label="Country" value={country} onChange={e=>setCountry(e.target.value)} select>
            {['IN','US','UK','CA','AU','DE'].map(c=>(
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </TextField>
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" disabled={submitting}>Sign up</Button>
          <Button component={Link} to="/login">Back to login</Button>
        </Stack>
      </form>
    </Box>
  )
}
