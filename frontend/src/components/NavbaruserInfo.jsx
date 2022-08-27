import { useAuth } from '../context/AuthContext'
import UserAvatar from './UserAvatar'
import NavbarItemOption from './NavbaritemOption'
import NavbarSeparator from './NavbarSeparator'

export default function NavbarUserInfo () {
  const { user } = useAuth()

  return (
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <UserAvatar user={user.user} />
      </a>
      <ul className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        <NavbarItemOption>Perfil</NavbarItemOption>
        <NavbarItemOption>Configuracion</NavbarItemOption>
        {user.user.role === 0 ? <NavbarItemOption to='/admin'>Admin</NavbarItemOption> : null }
        <NavbarSeparator />
        <NavbarItemOption to='/logout'>Cerror session</NavbarItemOption>
      </ul>
    </li>
  )
}
