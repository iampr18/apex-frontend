import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import AppRouter from './router/AppRouter.jsx'
import theme from './styles/theme.js'
import { AuthProvider } from './hooks/useAuth.jsx'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <AppRouter />
        </Container>
      </AuthProvider>
    </ThemeProvider>
  )
}
