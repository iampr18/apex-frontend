import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import LoginPage from '../pages/Auth/LoginPage.jsx'
import SignupPage from '../pages/Auth/SignupPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import TodoPage from '../pages/TodoPage.jsx'
import CurrencyPage from '../pages/CurrencyPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import ProtectedRoute from '../components/common/ProtectedRoute.jsx'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/todo" element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
        <Route path="/convertor" element={<ProtectedRoute><CurrencyPage /></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
