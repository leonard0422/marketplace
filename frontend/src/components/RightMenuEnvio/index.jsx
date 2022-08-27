import './style.css'

function RightMenuEnvio ({ toggleMenuEnvio }) {
  return (
        <div className="offcanvas-personalizado-envio offcanvas-end-personalizado-envio" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header-personalizado-envio justify-content-end">
                <button type="button" className="btn-close text-reset" onClick={toggleMenuEnvio}></button>
            </div>
            <div className="offcanvas-body-personalizado-envio d-flex align-items-center">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <h3>
                                ENVÍOS, CAMBIOS Y DEVOLUCIONES
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h6>
                                ENVÍO
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>
                                RECOGIDA EN TIENDA - GRATUITO
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>
                                En la tienda que elijas en 3-8 días laborables.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>
                                ENTREGA A DOMICILIO:
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li>
                                    <p>
                                        ENTREGA ESTÁNDAR - 9.900 COP / GRATUITO (PEDIDOS A PARTIR DE 199.900 COP) <br />
                                        El plazo estimado de entrega oscilará entre 3-8 días laborables, dependiendo de la dirección de entrega.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>
                                En el momento de procesar tu compra, te mostraremos los métodos de envío disponibles, el coste y la fecha de entrega de tu pedido.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default RightMenuEnvio
