import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '@/routes/DashboardPage'
import { TasksPage } from '@/routes/TasksPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/tareas" element={<TasksPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
