import NavbarItem from './NavbarItem'
import NavbarItemOption from './NavbaritemOption'
import NavbarSeparator from './NavbarSeparator'
import NavbarUserInfo from './NavbaruserInfo'
import AdminStyles from '../pages/Admin/AdminStyles.module.css'

export default function DashboardNavbar () {
  return (
    <nav className={AdminStyles.navPositionSticky + ' navbar navbar-expand-lg navbar-light bg-light p-1 shadow rounded'}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <NavbarItem title='Notificaciones'>
              <NavbarItemOption>Action</NavbarItemOption>
              <NavbarItemOption>Another Action</NavbarItemOption>
              <NavbarSeparator />
              <NavbarItemOption>Something else here</NavbarItemOption>
            </NavbarItem>

            <NavbarItem title='Mensajes'>
              <NavbarItemOption>Action</NavbarItemOption>
              <NavbarItemOption>Another Action</NavbarItemOption>
              <NavbarSeparator />
              <NavbarItemOption>Something else here</NavbarItemOption>
            </NavbarItem>

            <NavbarUserInfo />

          </ul>
        </div>
      </div>
    </nav>
  )
}
