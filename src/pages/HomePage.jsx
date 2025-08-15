import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppTopBar from '../components/common/AppTopBar.jsx'
import { useAuth } from '../hooks/useAuth.jsx'

export default function HomePage() {
  const navigate = useNavigate()
  const { logout } = useAuth()
  return (
    <Box sx={{ py: 2 }}>
      <AppTopBar onLogout={logout} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Welcome to Apex</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="large" onClick={()=>navigate('/todo')}>Todo</Button>
          <Button variant="outlined" size="large" onClick={()=>navigate('/convertor')}>Currency convertor</Button>
        </Stack>
      </Box>
    </Box>
  )
}
