import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import AppRouter from './router/AppRouter.jsx'
import theme from './styles/theme.js'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppRouter />
      </Container>
    </ThemeProvider>
  )
}
