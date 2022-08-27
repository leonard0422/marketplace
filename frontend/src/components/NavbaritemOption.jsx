import { Link } from 'react-router-dom'

export default function NavbarItemOption ({ children, to = '#' }) {
  return <li><Link className="dropdown-item" to={to}>{children}</Link></li>
}
