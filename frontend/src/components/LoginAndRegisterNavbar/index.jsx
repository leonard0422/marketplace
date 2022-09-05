import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'

export default function LoginAndRegisterNavbar () {
  return (
        <div className="ps-block--user-header">
            <div className="ps-block__left">
                <i className="icon-user"><FaRegUser></FaRegUser></i>
            </div>
            <div className="ps-block__right">
                <Link to="login">Login</Link>
                <Link to="login">Register</Link>
            </div>
        </div>
  )
}
