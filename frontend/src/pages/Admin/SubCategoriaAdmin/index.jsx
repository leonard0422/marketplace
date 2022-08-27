
import { useEffect, useState } from 'react'
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'
// import { icons } from 'react-icons/lib'
import { toast } from 'react-toastify'
import ModalLayer from '../../../components/ModalLayer'
import DataTable from '../../../components/Table'
import RequestOptions from '../../../services/SubCategoriaService'
import { confirm } from '../../../utils/VexAlerts'
import { useTable } from '../TableProvider'
import SubCategoryForm from './SubCategoryForm'

const columns = [
  {
    name: '#',
    selector: (row, index) => index + 1,
    sortable: true
  },
  {
    name: 'SubCategoria',
    selector: (row) => row.description,
    sortable: true
  },
  {
    name: 'Id Categoria',
    omit: true,
    selector: (row) => row.category_id,
    sortable: true
  },
  {
    name: 'Categoria',
    selector: (row) => row.category,
    sortable: true
  },
  {
    name: 'Estado',
    selector: (row) => row.state,
    sortable: true
  },
  {
    name: 'Acciones',
    button: true,
    cell: (row, index, columns, id) => {
      const [showmodal, setShowmodal] = useState(false)
      const { setRefresh } = useTable()

      const toggleModal = () => {
        setShowmodal(!showmodal)
      }

      function handleSubmit (values, form) {
        RequestOptions.Update(values).then(
          () => {
            toast.success('Se actualizo con exito la información!', {
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: '📝'
            })
            setRefresh(refresh => !refresh)
            toggleModal()
          }
        ).catch(console.error)
        form.resetForm()
        toggleModal()
      }

      const handleDelete = () => {
        confirm('Esta segura de que quiere eliminar esta sub-categoria?', () => {
          RequestOptions.Delete(row.id).then(
            () => {
              toast.success('Eliminado con exito!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                icon: '🗑️'
              })
              setRefresh(refresh => !refresh)
            }
          ).catch(console.error)
        })
      }

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-6"> <FaEdit onClick={toggleModal} size={'1.5rem'} /> </div>
            <div className="col-6"> <FaTrashAlt onClick={handleDelete} size={'1.5rem'} /> </div>
          </div>

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
                          <SubCategoryForm dataSubcategoria={row} handleSubmit={handleSubmit} />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </ModalLayer>
              )
            : null}
        </div>
      )
    }
  }
]

// const data = [
//   {
//     id: 1,
//     subcategoria: 'Busos',
//     categoria: 'Hombre',
//     state: 'Activo'
//   },
//   {
//     id: 2,
//     subcategoria: 'Blusas',
//     categoria: 'Mujer',
//     state: 'Activo'
//   }
// ]

export default function SubCategoriaAdmin () {
  const [showmodal, setShowmodal] = useState(false)
  const { data, setData, refresh } = useTable()
  const [add, setAdd] = useState(false)
  const [pending, setPending] = useState(true)

  const toggleModal = () => {
    setShowmodal(!showmodal)
  }

  useEffect(() => {
    RequestOptions.GetAll().then((response) => {
      setData(response)
      setPending(false)
    }).catch(console.error)
  }
  , [refresh, add])

  function handleSubmit (values, form) {
    RequestOptions.Add(values).then((response) => {
      setAdd(add => !add)
      toast.success('Se creo con exito!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }).catch(console.error)
    form.resetForm()
    toggleModal()
  }

  return (
    <>
      <div className="container-fluid">

        <div className="row my-3">
          <div className="col-6">
            <h1>
              Sub Categorias
            </h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button onClick={toggleModal} className="btn btn-black d-flex align-items-center justify-content-center">
              <FaPlus className=" me-2" />Nueva SubCategoria
            </button>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">

            <DataTable columns={columns} data={data} progressPending={pending}></DataTable>

          </div>
        </div>

      </div>

      {(showmodal === true)
        ? (
          <ModalLayer >
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body">
                <div className="container-fluid">

                  <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-end">
                      <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="col-12">
                      <h3>
                        Nueva SubCategoria
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <SubCategoryForm handleSubmit={handleSubmit}></SubCategoryForm>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ModalLayer>
          )
        : null}

    </>
  )
}
