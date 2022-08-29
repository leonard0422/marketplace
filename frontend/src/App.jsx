import { useEffect } from 'react'
import './style.css'
import './market-place-4.css'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Admin from './pages/Admin/Admin'
import Categorias from './pages/Categorias'
import SubCategorias from './pages/SubCategorias'
import Productos from './pages/Productos'
import NotFound from './pages/NotFound'
import LoadingProvider from './components/LoadingModal'
import AlertProvider from './components/AlertModal'
import Alert from './components/Alert'
import { useAuth } from './context/AuthContext'
import RequiredAdmin from './components/RequiredAdmin'

import 'vex-js/dist/css/vex.css'
import 'vex-js/dist/css/vex-theme-wireframe.css'
import Logout from './pages/Logout'

// console.log(import.meta.env)
function App () {
  const auth = useAuth()
  // const [set, setSet] = useState()
  useEffect(() => {
    auth.check()
  }, [])

  return (
    <LoadingProvider>
      <AlertProvider>
        <Alert>
          <Routes>

            <Route path='/' element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singup" element={<Singup />} />

              <Route path="/categorias" element={<Categorias />}>
                <Route path=':categorias' element={<Outlet />} />
              </Route>

              <Route path="/subCategorias">
                <Route path=':subcategory' element={<SubCategorias />} />
              </Route>

              <Route path="/productos" element={<Productos />} /> *
            </Route>

            <Route path='/admin/*' element={
              <RequiredAdmin >
                <Admin />
              </RequiredAdmin>} >
            </Route>

            <Route path='/logout' element={<Logout />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Alert>
      </AlertProvider>
    </LoadingProvider>
  )
}

export default App
