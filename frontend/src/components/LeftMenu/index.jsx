import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Asset } from '../../utils/source'
import './style.css'
import { IoCloseSharp } from 'react-icons/io5'
import useCategoryAndSub from '../../hooks/useLeftMenu'
import LiListTabs from '../LiListTabs'
import ContenListSubTabs from '../ContenListSubTabs'

function LeftMenu ({ toggleLeftMenu }) {
  const { categories, pending } = useCategoryAndSub()

  return (
        <motion.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.8 }}
            className="offcanvas-perosonalizado offcanvas-start-personalizado"
        >
            <nav className="navbar navbar-light navbar-light ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 d-flex alaing-item-center">
                                    <button className="navbar-toggler navbar-toggler-personal" onClick={toggleLeftMenu} type="button">
                                        <IoCloseSharp color='black' size={'2rem'} />
                                    </button>
                                </div>
                                <div className="col-10 d-flex">
                                    <Link className="navbar-brand" to="/"><img className="w-100" src={Asset('/storage/assets/logos/logo.png')} alt="" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>

            <div className="offcanvas-body-perosonalizado mt-5 pt-5">

                {pending
                  ? 'cargando...'
                  : (
                        <>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <LiListTabs data={categories} />
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <ContenListSubTabs data={categories} />
                            </div>
                        </>
                    )}

            </div>
        </motion.div>
  )
}

export default LeftMenu
