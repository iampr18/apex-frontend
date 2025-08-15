import { Box, Typography } from '@mui/material'
import AppTopBar from '../components/common/AppTopBar.jsx'
import { useAuth } from '../hooks/useAuth.js'

export default function CurrencyPage() {
  const { logout } = useAuth()
  return (
    <Box sx={{ py: 2 }}>
      <AppTopBar onLogout={logout} />
      <Typography variant="h5" sx={{ mt: 3 }}>Work in progress</Typography>
    </Box>
  )
}
