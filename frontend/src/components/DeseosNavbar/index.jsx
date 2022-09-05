import { FaRegHeart } from 'react-icons/fa'
export default function DeseosNavbar () {
  return (
        <a className="header__extra" href="#">
            <i className="icon-heart"><FaRegHeart size={'3.5rem'}></FaRegHeart></i>
            <span><i>0</i></span>
        </a>
  )
}
