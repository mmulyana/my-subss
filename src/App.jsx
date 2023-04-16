import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import ProtectedRoute from './utils/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
