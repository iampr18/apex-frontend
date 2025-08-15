import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>404</Typography>
      <Typography sx={{ mb: 3 }}>Page not found</Typography>
      <Button variant="contained" onClick={()=>navigate('/login')}>Go to Login</Button>
    </Box>
  )
}
