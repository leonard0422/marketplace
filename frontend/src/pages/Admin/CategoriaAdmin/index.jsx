import { useState } from 'react'
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import Alert from '../../../components/Alert'
import ModalLayer from '../../../components/ModalLayer'
import DataTable from '../../../components/Table'
import CategoriaService from '../../../services/CategoriaService'
import CategoryForm from './CategoryForm'
import { useTable } from '../TableProvider'
import useCategorieTable from '../../../hooks/useCategoryTable'
import { toast } from 'react-toastify'
import { confirm } from '../../../utils/VexAlerts'

const columns = [
  {
    name: '#',
    selector: (row, index) => index + 1,
    sortable: true
  },
  {
    name: 'Categoria',
    selector: (row) => row.description,
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

      const handleSubmit = (values, form) => {
        CategoriaService.Update(values).then(
          () => {
            setRefresh(refresh => !refresh)
            toggleModal()
          }
        ).catch(console.error)
        form.resetForm()
        toggleModal()
      }

      const handleDelete = () => {
        confirm('Esta segura de que quiere eliminar esta categoria?', () => {
          CategoriaService.Delete(row.id).then(
            () => {
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
                          <CategoryForm data={row} handleSubmit={handleSubmit} />
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

export default function CategoriaAdmin () {
  const [showmodal, setShowmodal] = useState(false)
  const [add, setAdd] = useState(false)

  const [data, pending] = useCategorieTable([add])

  const toggleModal = () => {
    setShowmodal(!showmodal)
  }

  const handleSubmit = (values, form) => {
    CategoriaService.Add(values).then(() => {
      setAdd(add => !add)
      toast.success('Se ha agregado la categoria correctamente!', {
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
              Categorias
            </h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button onClick={toggleModal} className="btn btn-black d-flex align-items-center justify-content-center">
              <FaPlus className=" me-2" />Nueva Categoria
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <DataTable columns={columns} data={data} progressPending={pending} />
          </div>
        </div>
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
                        Nueva Categoria
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <CategoryForm handleSubmit={handleSubmit} />
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
