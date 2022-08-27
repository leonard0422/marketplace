import './style.css'
import RightMenuEnvio from '../../components/RightMenuEnvio/index'
import RightMenuCarrito from '../../components/RightMenuCarrito/index'
import { useState } from 'react'

function Productos () {
  const [ShowCarritoMenu, setShowCarritoMenu] = useState(false)
  const [ShowMenuEnvio, setShowMenuEnvio] = useState(false)
  const toggleCarritoMenu = () => {
    setShowCarritoMenu(!ShowCarritoMenu)
  }
  const toggleMenuEnvio = () => {
    setShowMenuEnvio(!ShowMenuEnvio)
  }
  return (
    <>
    {ShowCarritoMenu === true ? <RightMenuCarrito toggleCarritoMenu={toggleCarritoMenu} /> : null}
    {ShowMenuEnvio === true ? <RightMenuEnvio toggleMenuEnvio={toggleMenuEnvio} /> : null}

    {/* <RightMenuEnvio /> */}
    {/* <RightMenuCarrito /> */}
        <div className="container-fluid ">
            <div className="row mt-5 pt-5">

                <div className="row mb-5">
                    <div className="col-3 d-flex align-items-end">
                        <div className="row justify-content-center descripcion-producto">
                            <div className="col-8">
                                <h6>
                                    MATERIALES, CUIDADOS Y ORIGEN
                                    ORIGEN
                                    Trabajamos con nuestros proveedores, trabajadores, sindicatos y organismos internacionales para
                                    desarrollar una cadena de suministro en la que se respetan y promueven los derechos humanos,
                                    contribuyendo a los Objetivos de Desarrollo Sostenible de Naciones Unidas.

                                    Además, gracias a la colaboración continua con nuestros proveedores, hemos desarrollado un
                                    programa de trazabilidad que nos permite saber dónde y cómo se confeccionan nuestras prendas.
                                    Hecho en Marruecos
                                    CUIDADOS
                                    Cuidar de tus prendas es cuidar del medioambiente.
                                    Lava tus prendas sólo cuando sea necesario, a veces es suficiente con ventilarlas. Los procesos
                                    de lavado desgastan poco a poco los tejidos, reduciéndo los lavados alargamos la vida de
                                    nuestras prendas y reducimos el consumo de agua y energía en procesos de cuidado.
                                    [car]8
                                    Lavar a mano max 30ºC
                                    [car]14
                                    No usar lejía / blanqueador
                                    [car]18
                                    Planchar máximo 110ºC
                                    [car]125
                                    Lim.Seco tetracloroetileno
                                    [car]35
                                    No usar secadora
                                    MATERIALES
                                    Trabajamos con programas de seguimiento para garantizar el cumplimiento de los estándares de
                                    seguridad, salud y calidad de nuestros productos.

                                    El estándar Green to Wear 2.0 tiene como objetivo minimizar el impacto ambiental de la
                                    producción textil. Para ello hemos desarrollado el programa The List de Inditex que nos ayuda a
                                    garantizar tanto la limpieza de los procesos productivos como la seguridad y salud de nuestras
                                    prendas.
                                    EXTERIOR
                                    100% poliéster
                                    FORRO
                                    100% poliéster
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row justify-content-end">

                            <div className="col-9 producto-scroll-y  scrollspy">
                                <div className="row mandatory-scroll-aling" id="1"> <img className="w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                </div>
                                <div className="row mandatory-scroll-aling" id="2"> <img className="w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                </div>
                                <div className="row mandatory-scroll-aling" id="3"> <img className="w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                </div>
                                <div className="row mandatory-scroll-aling" id="4"> <img className="w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                </div>
                                <div className="row mandatory-scroll-aling" id="5"> <img className="w-100" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="col-1">
                                <a href="#1">
                                    <div className="row mandatory-scroll-aling mb-1"> <img className="w-60" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </div>
                                </a>
                                <a href="#2">
                                    <div className="row mandatory-scroll-aling mb-1"> <img className="w-60" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </div>
                                </a>
                                <a href="#3">
                                    <div className="row mandatory-scroll-aling mb-1"> <img className="w-60" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </div>
                                </a>
                                <a href="#4">
                                    <div className="row mandatory-scroll-aling mb-1"> <img className="w-60" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </div>
                                </a>
                                <a href="#5">
                                    <div className="row mandatory-scroll-aling mb-1"> <img className="w-60" src="http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg" alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <div className="row justify-content-center">
                            <div className="col-9">

                                <div className="row">
                                    <div className="col-12">
                                        <h4>
                                            VESTIDO MINI SATINADO
                                        </h4>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <p>
                                            Vestido de escote recto. Cierre lateral con cremallera oculta en costura.
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <p>
                                            FUCSIA | 8207/109
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <p>
                                            179.900 COP
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">XL</a>
                                            <a href="#" className="list-group-item list-group-item-action">S</a>
                                            <a href="#" className="list-group-item list-group-item-action">M</a>
                                            <a href="#" className="list-group-item list-group-item-action">L</a>
                                            <a href="#" className="list-group-item list-group-item-action">XXL</a>
                                        </div>

                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-black" type="button" onClick={toggleCarritoMenu}>
                                                Añadir a la cesta</button>
                                            {/* <!-- <button class="btn btn-black" type="button">Tramitar pedido</button> --> */}
                                        </div>

                                    </div>
                                </div>

                                {/* <!---------------------
                                ENVIOS
                            -------------------- --> */}
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <a className="text-decoration-none text-dark" type="button" onClick={toggleMenuEnvio}>
                                            <h6>
                                                ENVÍOS, CAMBIOS Y DEVOLUCIONES
                                            </h6>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- COMPLETAR LOOK --> */}
                <div className="row mt-1">
                    <div className="col-12 mx-4">
                        <h4>
                            COMPLETAR LOOK
                        </h4>
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

                {/* <!-- TAL VEZ TE INTERESE  --> */}
                <div className="row mt-5">
                    <div className="col-12 mx-4">
                        <h4>
                            TAL VEZ TE INTERESE
                        </h4>
                    </div>
                </div>

                <div className="row">

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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

                    <div className="col-3 ">
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
        </>
  )
}

export default Productos
