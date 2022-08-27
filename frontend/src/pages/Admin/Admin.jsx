import { Routes, Route } from 'react-router-dom'
import CategoriaAdmin from './CategoriaAdmin'
import SubCategoriaAdmin from './SubCategoriaAdmin'
import ProductoAdmin from './ProductoAdmin'
import SetAdmin from './SetAdmin'
import SliderAdmin from './SliderAdmin'
import { useAuth } from '../../context/AuthContext'
import { ModalLoadnig } from '../../components/LoadingModal'
import { TableProvider } from './TableProvider'
import Notify from '../../components/Notificacion'
import DashboardNavbar from '../../components/DashboardNavbar'
import DashboardAside from '../../components/DashboardAside'
import AdminHome from './AdminHome'
import AdminStyles from './AdminStyles.module.css'

function Admin () {
  const { user } = useAuth()

  if (!user) return <ModalLoadnig />

  return (
    <div id="wrapper" className={AdminStyles.wrappeStyle}>
      <DashboardAside />

      <div id="content-wrapper" className=' d-flex flex-column navPositionSticky' >
        <DashboardNavbar />

        <div>
          <Routes>
            <Route path='' element={<AdminHome />} />
            <Route path='categoria-admin' element={<TableProvider> <CategoriaAdmin /> </TableProvider>} />
            <Route path='sub-categoria-admin' element={<TableProvider> <SubCategoriaAdmin /> </TableProvider>} />
            <Route path='producto-admin' element={<TableProvider> <ProductoAdmin /> </TableProvider>} />
            <Route path='set-admin' element={<TableProvider> <SetAdmin /> </TableProvider>} />
            <Route path='slider-admin' element={<TableProvider> <SliderAdmin /> </TableProvider>} />
          </Routes>

        </div>
      </div>

      <Notify />

    </div>
  )
}

export default Admin
