import { useEffect, useState } from 'react'
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'
import ModalLayer from '../../../components/ModalLayer'
import DataTable from '../../../components/Table'
import SetService from '../../../services/SetService'
import { useTable } from '../TableProvider'
import SetForm from './SetForm'

// const data = {
//   Header: [
//     'Id', 'Set', 'Descrcipcion', 'Editar'
//   ],
//   Body: [
//     { id: 1, set: 'test', descripcion: 'test', editar: { editar: 'editar' } },
//     { id: 1, set: 'test', descripcion: 'test', editar: { editar: 'editar' } },
//     { id: 1, set: 'test', descripcion: 'test', editar: { editar: 'editar' } },
//     { id: 1, set: 'test', descripcion: 'test', editar: { editar: 'editar' } }

//   ]
// }
const columns = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: 'Set',
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: 'Descripción',
    selector: (row) => row.description,
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
        SetService.Update(values).then(
          () => {
            setRefresh(refresh => !refresh)
            toggleModal()
          }
        ).catch(console.error)
        form.resetForm()
        toggleModal()
      }

      const handleDelete = () => {
        SetService.Delete(row.id).then(
          () => {
            setRefresh(refresh => !refresh)
          }
        ).catch(console.error)
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
                          <SetForm dataSet={row} handleSubmit={handleSubmit}></SetForm>
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

export default function SetAdmin () {
  const [showmodal, setShowmodal] = useState(false)
  const { data, setData, refresh } = useTable()
  const [add, setAdd] = useState(false)
  const [pending, setPending] = useState(true)

  const toggleModal = () => {
    setShowmodal(!showmodal)
  }

  useEffect(() => {
    SetService.GetAll().then((response) => {
      setData(response)
      setPending(false)
    }).catch(console.error)
  }
  , [refresh, add])

  const handleSubmit = (values, form) => {
    SetService.Add(values).then((response) => {
      setAdd(add => !add)
      alert('Se ha agregado el set correctamente')
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
              Sets
            </h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button onClick={toggleModal} className="btn btn-black d-flex align-items-center justify-content-center">
              <FaPlus className=" me-2" />Nuevo Set
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
            <div className="card" style={{ width: '30vw' }}>
              <div className="card-body">
                <div className="container-fluid">

                  <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-end">
                      <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="col-12">
                      <h3>
                        Nuevo Set
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <SetForm handleSubmit={handleSubmit}></SetForm>
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
