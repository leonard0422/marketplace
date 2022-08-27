import { useEffect, useState } from 'react'
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'
import ModalLayer from '../../../components/ModalLayer'
import DataTable from '../../../components/Table'
import SliderForm from './SliderForm'
import SubSliderForm from './SubSliderForm'
import SliderService from '../../../services/SliderService'
import { useTable } from '../TableProvider'
// import { Asset } from '../../../utils/source'
import ValidarExtension from '../../../utils/ValidarExtensiones'
import Multimedia from '../../../components/Multimedia'
import { confirm } from '../../../utils/VexAlerts'

const columns = [
  {
    name: 'Nuevo nav',
    button: true,
    cell: (row) => {
      const [showmodal, setShowmodal] = useState(false)
      const { data, setData, refresh } = useTable()
      const [add, setAdd] = useState(false)
      const [pending, setPending] = useState(true)
      const toggleModal = () => {
        setShowmodal(!showmodal)
      }
      // console.log(data)
      useEffect(() => {
        SliderService.GetAll().then((response) => {
          // console.log(response)
          setData(response)
          setPending(false)
        }).catch(console.error)
      }
      , [refresh, add])

      function handleSubmit ({ files, ...restValues }, form) {
        // console.log('hola')
        const formData = new FormData()
        formData.appendObject(restValues)
        formData.appendArrar(files)
        SliderService.Add(formData).then(() => {
          setAdd(add => !add)
          form.resetForm()
          toggleModal()
        }).catch(alert)
      }

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-6"> <FaPlus onClick={toggleModal} size={'1rem'} /> </div>
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
                            Nuevo Elemento Nav
                          </h3>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <SubSliderForm id={row.id} dataSubSlider={null} handleSubmit={handleSubmit} progressPending={pending} />
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
  },
  {
    name: '#',
    selector: (_row, index) => index + 1,
    sortable: true
  },
  {
    name: 'Nombre',
    selector: (row) => row.name,
    sortable: true
  },
  // {
  //   name: 'Multimedia',
  //   cell: (row, index, columns, id) => {
  //     const multimedia = ValidarExtension(row.url_image.split('.')[1])
  //     return <Multimedia multimedia={multimedia} data={row.url_image}/>
  //   }
  // },
  // {
  //   name: 'URL',
  //   selector: (row) => row.href,
  //   sortable: true
  // },
  {
    name: 'Acciones',
    button: true,
    cell: (row, _index, _columns, _id) => {
      // console.log(row)
      const [showmodal, setShowmodal] = useState(false)
      const { setRefresh } = useTable()
      const toggleModal = () => {
        setShowmodal(!showmodal)
      }

      function handleSubmit ({ files, ...restValues }, form) {
        const formData = new FormData()
        formData.appendObject(restValues)
        // formData.appendArrar(files)
        SliderService.Update(formData, restValues.id).then(() => {
          setRefresh(refresh => !refresh)
          toggleModal()
          form.resetForm()
          toggleModal()
        }).catch(alert)
      }

      const handleDelete = () => {
        confirm('Esta seguro de que quire eliminar el slider?', () => {
          SliderService.Delete(row.id).then(
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
                <div className="card" style={{ width: '30vw' }}>
                  <div className="card-body">
                    <div className="container-fluid">

                      <div className="row align-items-center">
                        <div className="col-12 d-flex justify-content-end">
                          <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="col-12">
                          <h3>
                            Modificar Slider
                          </h3>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <SliderForm data={row} handleSubmit={handleSubmit} />
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

// const data1 = [
//   {
//     id: 1,
//     set: 'Mujer',
//     descripcion: 'Activo'
//   },
//   {
//     id: 2,
//     categoria: 'Hombre',
//     multimedia: 'https://www.facebook.com/',
//     ref: 'Nuevo',
//     url: 'https://www.facebook.com/',
//     subtable: [
//       {
//         id: 1,
//         subcategoria: 'Camiseta',
//         multimedia: 'https://www.google.com/',
//         url: 'https://www.google.com/'
//       }
//     ]
//   }
// ]

const rowPreDisabled = row => !row.sub_sliders.length

const ExpandedComponent = (row) => {
  const subdata = row.data.sub_sliders
  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
      sortable: true
    },
    {
      name: 'Nombre Nav',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'Multimedia',
      cell: (row, index, columns, id) => {
        const multimedia = ValidarExtension(row.url_image.split('.')[1])
        return <Multimedia multimedia={multimedia} data={row.url_image}/>
      }
    },
    {
      name: 'URL',
      selector: (row) => row.href,
      sortable: true
    },
    {
      name: 'Acciones',
      button: true,
      cell: (row) => {
        const [showmodal, setShowmodal] = useState(false)
        const { setRefresh } = useTable()

        const toggleModal = () => {
          setShowmodal(!showmodal)
        }

        function handleSubmit ({ files, ...restValues }, form) {
          const formData = new FormData()
          formData.appendObject(restValues)
          formData.appendArray(files)
          SliderService.Update(formData, restValues.id).then(() => {
            setRefresh(refresh => !refresh)
            toggleModal()
            form.resetForm()
            toggleModal()
          }).catch(alert)
        }

        const handleDelete = () => {
          confirm('esta seguro de que quiere eliminar el slider?', () => {
            SliderService.Delete(row.id).then(
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
                  <div className="card" style={{ width: '30vw' }}>
                    <div className="card-body">
                      <div className="container-fluid">

                        <div className="row align-items-center">
                          <div className="col-12 d-flex justify-content-end">
                            <button onClick={toggleModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="col-12">
                            <h3>
                              Modificar Navs
                            </h3>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12">
                            <SubSliderForm id={row.id} dataSubSlider={row} handleSubmit={handleSubmit} />
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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <DataTable columns={columns} data={subdata} rowPreDisabled={rowPreDisabled} />
        </div>
      </div>
    </div>
  )
}

export default function SliderAdmin () {
  const [showmodal, setShowmodal] = useState(false)
  const [showmodalsub, setShowmodalsub] = useState(false)
  const { data, setData, refresh } = useTable()
  const [add, setAdd] = useState(false)
  const [pending, setPending] = useState(true)

  const toggleModal = () => {
    setShowmodal(!showmodal)
  }
  const toggleModalsub = () => {
    setShowmodalsub(!showmodalsub)
  }

  useEffect(() => {
    SliderService.GetAll().then((response) => {
      // console.log(response)
      setData(response)
      setPending(false)
    }).catch(console.error)
  }
  , [refresh, add])

  function handleSubmit ({ files, ...restValues }, form) {
    console.log(restValues)
    const formData = new FormData()
    formData.appendObject(restValues)
    // formData.appendArrar(files)
    SliderService.Add(formData).then(() => {
      setAdd(add => !add)
      form.resetForm()
      toggleModal()
    }).catch(alert)
  }

  return (
    <>
      <div className="container-fluid">

        <div className="row my-3">
          <div className="col-6">
            <h1>
              Sliders
            </h1>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button onClick={toggleModal} className="btn btn-black d-flex align-items-center justify-content-center">
              <FaPlus className=" me-2" />Nuevo Slider
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            <DataTable columns={columns} data={data} expandableRows expandableRowDisabled={rowPreDisabled} expandableRowsComponent={ExpandedComponent} progressPending={pending} />

          </div>
        </div>

      </div>

      {
        (showmodal === true)
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
                          Nuevo Slider
                        </h3>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <SliderForm handleSubmit={handleSubmit} />
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
