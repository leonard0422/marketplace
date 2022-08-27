import './style.css'

function RightMenuCarrito ({ toggleCarritoMenu }) {
  return (
        <div className="offcanvas-personalizado-cesta offcanvas-end-personalizado-cesta">
            <div className="offcanvas-header-personalizado-cesta justify-content-end">
                <button type="button" className="btn-close text-reset" onClick={toggleCarritoMenu}></button>
            </div>

            <div className="offcanvas-body-personalizado-cesta">
                <div className="container-fluid">

                    <div className="row mb-5">
                        <div className="col-12">
                            <h3>
                                CESTA
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 tamaño-h-cesta-personalizado">

                            <div className="row mb-5">
                                <div className="col-12">
                                    <a className="text-decoration-none text-dark" href="">
                                        <h6>
                                            SANDALIA TACÓN ALTO PIEL
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-8">
                                            <img className="w-100" src="./assets/img/productos/z-1.jpg" alt="" />
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6>
                                                        COLOR: BLANCO
                                                    </h6>
                                                    <p>
                                                        TALLA: 35
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6>
                                                        <strong>
                                                            1 x $179.900 COP
                                                        </strong>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!---------------------
                        SEGUNDO PRODUCTO CESTA
            -----------------------> */}

                            <div className="row mb-5">
                                <div className="col-12">
                                    <a className="text-decoration-none text-dark" href="">
                                        <h6>
                                            BLUSA ROSADA
                                        </h6>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-8">
                                            <img className="w-100" src="./assets/img/productos/1.jpg" alt="" />
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6>
                                                        COLOR: BLANCO
                                                    </h6>
                                                    <p>
                                                        TALLA: 35
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6>
                                                        <strong>
                                                            1 x $179.900 COP
                                                        </strong>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-1">
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button className="btn btn-black" type="button">
                                    IR A LA CESTA</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
  )
}

export default RightMenuCarrito
