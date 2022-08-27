import { Link } from 'react-router-dom'

export default function DashboardAsideOption ({ children, to = '' }) {
  return (
    <>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item px-2">
        <Link className="nav-link" to={to}>
          {children}
        </Link>
      </li>
    </>
  )
}
