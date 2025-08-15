import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export default function AppTopBar({ onLogout }) {
  const { pathname } = useLocation()
  const NavBtn = ({ to, label }) => (
    <Button
      component={Link}
      to={to}
      variant={pathname===to ? 'contained' : 'outlined'}
      color={pathname===to ? 'secondary' : 'inherit'}
      sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.7)', color: pathname===to ? 'white' : 'rgba(255,255,255,0.9)' }}
    >
      {label}
    </Button>
  )
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar sx={{ gap: 2, justifyContent: 'space-between' }}>
        <Typography variant="h6">Apex</Typography>
        <Box>
          <NavBtn to="/home" label="Home" />
          <NavBtn to="/todo" label="Todo" />
          <NavBtn to="/convertor" label="Currency convertor" />
        </Box>
        <Button color="inherit" onClick={onLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  )
}
