import { Link } from 'react-router-dom'
import './style.css'
import { Asset } from '../../utils/source'
import { useAuth } from '../../context/AuthContext'
import Cart from '../Cart'
import SearchBox from '../SearchBox'
import LeftMenu from '../LeftMenu'
import { useState } from 'react'
import NavbarUserInfo from '../NavbaruserInfo'

function Navbar () {
  const { user } = useAuth()
  const [ShowLeftMenu, setShowLeftMenu] = useState(false)
  const toggleLeftMenu = () => {
    setShowLeftMenu(!ShowLeftMenu)
  }
  return (
        <nav className="navbar navbar-light navbar-light fixed-top">
            {ShowLeftMenu === true ? <LeftMenu toggleLeftMenu={toggleLeftMenu} /> : null}

            <div className="container-fluid">

                <div className="col-6">
                    <div className="row">
                        <div className="col-1 d-flex alaing-item-center">
                            <button className="navbar-toggler navbar-toggler-personal" onClick={toggleLeftMenu} type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-6 d-flex">
                            <Link className="navbar-brand" to="/"><img className="w-100" src={Asset('/storage/assets/logos/logo.png')} alt="" /></Link>
                        </div>
                    </div>

                </div>

                <div className="col-6 ">
                    <div className="row">

                        <div className="col-3">
                            <SearchBox />
                        </div>

                        <div className="col-7">
                            <div className="row justify-content-center">
                                <div className="col-8">
                                    {
                                        user === null
                                          ? <strong className="nav-link">Cangando...</strong>
                                          : user === undefined
                                            ? <Link className="nav-link text-center" to='Login'>INICIAR SESIÓN</Link>
                                            : <div className="row navbar-nav"><NavbarUserInfo /></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <Cart itemsNumber={0} />
                        </div>

                    </div>
                </div>
            </div>
        </nav>

  )
}

export default Navbar
