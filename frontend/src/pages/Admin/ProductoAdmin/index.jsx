import { useState } from 'react'
import DataTable from '../../../components/Table'
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import ModalLayer from '../../../components/ModalLayer'
import ProductoForm from './ProductoForm'
// import { Asset } from '../../../config'

// const DATA_PRODUCTOS = {
//   Header: ['Id', 'Producto', 'SubCategoria', 'Categoria', 'Estado', 'Material', 'Descripción', 'Precio', 'Multimedia', 'Color-Talla-Cantidad', 'Nombre Conjunto', 'Editar'],
//   Body: [
//     { id: 1, producto: 'Top Aro', subcategoria: 0, categoria: '', estado: '', material: '', descripcion: '', precio: '', multimedia: '', detalles: [{ color: 'blanco', info: [{ xl: 3, s: 3 }] }], nombreConjunto: '', editar: { editar: 'editar' } }
//     // { id: 1, name: 'test', state: 0, editar: { editar: 'editar' } },
//     // { id: 1, name: 'test', state: 0, editar: { editar: 'editar' } },
//     // { id: 1, name: 'test', state: 0, editar: { editar: 'editar' } }
//   ]
// }

const columns = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
    width: '3.5%'
  },
  {
    name: 'Producto',
    selector: (row) => row.producto,
    sortable: true
  },
  {
    name: 'SubCategoria',
    selector: (row) => row.subcategoria,
    sortable: true
  },
  {
    name: 'Categoria',
    selector: (row) => row.categoria,
    sortable: true
  },
  {
    name: 'Material',
    selector: (row) => row.material,
    sortable: true
  },
  {
    name: 'Descripción',
    selector: (row) => row.descripcion,
    // sortable: true,
    wrap: true,
    width: '15%'
  },
  {
    name: 'Precio',
    selector: (row) => row.precio,
    sortable: true
  },
  {
    name: 'Multimedia',
    cell: (row, index, columns, id) => {
      return (
        <>
          <div className="container-fluid">
            <div className="row">

              <div className="col-12 d-flex" style={{ overflowX: 'scroll' }}>

                {row.multimedia
                  ? row.multimedia.map((item, index) => {
                    return (
                      <div className="col-12 d-flex" key={index}>
                        <img style={{ width: '100%', objectFit: 'cover', maxHeight: '30vh' }} src={item} alt="" />
                      </div>
                    )
                  })
                  : <div className="col-12">No hay imagenes</div>
                }

              </div>

            </div>
          </div>
        </>
      )
    }
  },
  {
    name: 'Color-Talla-Cantidad',
    wrap: true,
    cell: (row, index, columns, id) => {
      // const [data] = row.detalles
      // console.log(data)
      return (
        <>
          <div className="container-fluid px-0">
            <div className="row">

              <div className="col-12 px-0 py-3 d-flex" style={{ overflowX: 'scroll' }}>

                {row.detalles
                  ? row.detalles.map((item, index) => {
                    const { color, info } = item
                    console.log(color)
                    const [infoData] = info
                    const talla = Object.keys(infoData)
                    const cantidad = Object.values(infoData)
                    // console.log(Object.keys(infoData))
                    // console.log(Object.values(infoData))
                    return (

                        <div key={index} className="row" style={{ display: 'contents' }} >

                          <div className="col-6 d-flex align-items-center" {...index}>
                            <p className='m-0'>{color}</p>
                          </div>

                          <div className="col-4 px-0 d-flex align-items-center">
                          <div className="row">
                            {talla
                              ? talla.map((item, index) => {
                                return (

                                <div className="col-12" key={index}><p className='m-0'>{item}</p></div>

                                )
                              })
                              : <div className="col-12">No hay tallas</div>
                            }
                          </div>
                        </div>

                        <div className="col-3 px-0 d-flex align-items-center" style={{ borderRight: '2px solid black' }}>
                          <div className="row">
                            {cantidad
                              ? cantidad.map((item, index) => {
                                return (

                                <div className="col-12" key={index}><p className='m-0'>{item}</p></div>

                                )
                              })
                              : <div className="col-12">No hay cantidades</div>
                            }
                          </div>
                        </div>

                        {/* <div className="col-1 d-flex align-items-center">
                          <hr className="sidebar-divider my-0" style={{ height: '8vh', width: '.1vw', borderWidth: 0, color: '#000', background: '#000' }} />
                        </div> */}

                        </div>

                    )
                  })
                  : <div className="col-12">No hay detalles</div>
                }

              </div >
            </div >
          </div >
        </>
      )
    }
  },
  {
    name: 'Grupo Set',
    selector: (row) => row.set,
    sortable: true
  },
  {
    name: 'Estado',
    selector: (row) => row.state,
    sortable: true,
    width: '6%'
  },
  {
    name: 'Acciones',
    button: true,
    cell: (row, index, columns, id) => {
      const [showmodal, setShowmodal] = useState(false)

      const toggleModal = () => {
        setShowmodal(!showmodal)
      }

      // function handleSubmit (values) {
      //   SubCategoriaService.SubCategoria(values).then(() => {
      //     // Navigate('/CategoriaAdmin')
      //     console.log(values)
      //   })
      // }
      return (
        <>
          {/* <FaRegEye onClick={toggleModal} size={'1.5rem'} className='mx-1' /> */}
          <FaEdit onClick={toggleModal} size={'1.5rem'} className='mx-1' />
          <FaTrashAlt onClick={toggleModal} size={'1.5rem'} className='mx-1' />

          {(showmodal === true)
            ? (
              <ModalLayer >
                <div className="card" style={{ width: '20vw' }}>
                  <div className="card-body">
                    <div className="container-fluid">

                      <div className="row align-items-center">
                        <div className="col-12 d-flex justify-content-end">
                          <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="col-12">
                          <h3>
                            Modificar Categoria
                          </h3>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          {/* {console.log(row)} */}
                          {/* <SubCategoryForm handleSubmit={handleSubmit} /> */}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </ModalLayer>
              )
            : null}
          {/* // </div> */}
        </>
      )
    }
  }
]

const data = [
  {
    id: 1,
    producto: 'Top Aro',
    subcategoria: 'Blusas',
    categoria: 'Mujer',
    material: 'Súper Lencería',
    descripcion: 'Textil elástico, pesado y suave, de agradable sensación al tacto con un sutil efecto brillante. Compuesto de poliéster, nylon y spandex.',
    precio: '120.000',
    multimedia: ['http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg', 'http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg', 'http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua1.jpg', 'http://site2.your_domain/modo-desarrollo/backend/vistas/img/productos/dahua2.jpg'],
    detalles: [{ color: 'blanco', info: [{ xl: 3, s: 4 }] }, { color: 'rojo', info: [{ xl: 5, s: 6 }] }, { color: 'azul', info: [{ xl: 7, s: 8 }] }],
    set: 'Blusa+Falda',
    state: 'Activo'
  },
  {
    id: 2,
    subcategoria: 'Blusas',
    categoria: 'Mujer',
    state: 'Activo'
  }
]

export default function ProductoAdmin () {
  const [showmodal, setShowmodal] = useState(false)
  const toggleModal = () => {
    setShowmodal(!showmodal)
  }
  return (
    <>
      <div className="container-fluid">

        <div className="row my-3">
          <div className="col-6">
            <h1>
              Productos
            </h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button onClick={toggleModal} className="btn btn-black d-flex align-items-center justify-content-center">
              <FaPlus className=" me-2" />Nuevo Producto
            </button>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <DataTable columns={columns} data={data} ></DataTable>
          </div>
        </div>

      </div>

      {
        (showmodal === true)
          ? (
            <ModalLayer >
              <div className="card" style={{ width: '50vw', height: '100vh', overflowY: 'scroll' }}>
                <div className="card-body">
                  <div className="container-fluid">

                    <div className="row align-items-center">
                      <div className="col-12 d-flex justify-content-end">
                        <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="col-12">
                        <h3>
                          Nuevo Producto
                        </h3>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <ProductoForm></ProductoForm>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </ModalLayer>
            )
          : null
      }

    </>
  )
}
