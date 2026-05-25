import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '@/routes/DashboardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
