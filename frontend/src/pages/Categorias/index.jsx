import { useParams } from 'react-router-dom'
import './style.css'

function Categorias () {
  const { categorias } = useParams()
  console.log(categorias)
  return (
        <div className="container-fluid ">
            <div className="row mt-5 pt-5">

                <div className="row">
                    <div className="col-12 mx-4">
                        <a href="">
                            <h5>
                                BLUSAS
                            </h5>
                        </a>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12 d-flex" style={{ overflowX: 'scroll' }}>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA ROSADA
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA ROSADA
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!------------------------------
                SEGUNDA SUB-CATEGORIA
             -------------------------------> */}
                <div className="row mt-5">
                    <div className="col-12 mx-4">
                        <a href="">
                            <h5>
                                FALDAS
                            </h5>
                        </a>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12 d-flex" style={{ overflowX: 'scroll' }}>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA ROSADA
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA ROSADA
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mx-4">
                            <div className="row">
                                <div className="col-12">
                                    <a href="">
                                        <img className="altura_img w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="">
                                        <h6>
                                            BLUSA GRIS
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h5>
                                        125.000 COP
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
  )
}

export default Categorias
