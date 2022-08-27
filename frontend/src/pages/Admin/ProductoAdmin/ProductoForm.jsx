import { Formik, Form, Field, FieldArray } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import RequestOptions from '../../../services/SubCategoriaService'
import StyledDropzone from '../../../components/Dropzone'
import { FaTrash } from 'react-icons/fa'
import { ChromePicker } from 'react-color'

const formSchema = Yup.object().shape({
  category_id: Yup.string().required('Debe selecionar una categoria'),
  files: Yup.mixed().required('Debe subir al menos una imagen'),
  description: Yup.string().required('El nombre de la subcategoria es requerido'),
  state: Yup.string().required('El estado es requerido'),
  detalles: Yup.array().of(
    Yup.object().shape({
      color: Yup.string().required('Debe ingresar un color'),
      info: Yup.array().of(
        Yup.object().shape({
          talla: Yup.string().required('Debe ingresar una talla'),
          cantidad: Yup.number().required('Debe ingresar una cantidad')
        })
      )
    })
  ).required('Debe ingresar al menos un detalle')
})

export default function ProductoForm ({ dataProducto = null, handleSubmit }) {
  const [data, setData] = useState([])

  useEffect(() => {
    RequestOptions.GetAll().then((response) => {
      setData(response)
    }).catch(console.error)
  }, [])

  return (
    <Formik
      initialValues={
        dataProducto != null
          ? {
              id: dataProducto.id,
              category_id: dataProducto.category_id,
              description: dataProducto.description,
              state: dataProducto.state
            }
          : {
              id: '',
              subcategory_id: '',
              title: '',
              material: '',
              description: '',
              price: '',
              files: '',
              color: '#ffffff',
              size: '',
              stock: '',
              set_id: '',
              state: 1,
              detalles: [{ color: '', info: [{ talla: '', cantidad: '' }] }]

            }
      }

      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <Field name='id' type=''></Field>
          <div className="mb-3">
            <div className="form-floating">
              <Field
                as='select'
                name='category_id'
                className={classNames('form-select', { 'is-invalid': touched.category_id && errors.category_id })} id="category_id"
                aria-label="Default select example"
              >
                <option value="">--</option>
                {/* {data.map((item) => (
                  <option key={item.id} value={item.id}>{item.description}</option>
                ))} */}
              </Field>
              <label htmlFor="category_id">SubCategoria</label>
              {touched.category_id && errors.category_id
                ? <div id="category_id" className="invalid-feedback">{errors.category_id}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='title' className={classNames('form-control', { 'is-invalid': touched.title && errors.title })} id="title" aria-describedby="title" ></Field>
              <label htmlFor="title">Nombre Producto</label>
              {touched.title && errors.title
                ? <div id="title" className="invalid-feedback">{errors.title}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='material' className={classNames('form-control', { 'is-invalid': touched.material && errors.material })} id="material" aria-describedby="material" ></Field>
              <label htmlFor="material">Material</label>
              {touched.material && errors.material
                ? <div id="material" className="invalid-feedback">{errors.material}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='description' className={classNames('form-control', { 'is-invalid': touched.description && errors.description })} id="description" aria-describedby="description" ></Field>
              <label htmlFor="description">Descripción</label>
              {touched.description && errors.description
                ? <div id="description" className="invalid-feedback">{errors.description}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='price' className={classNames('form-control', { 'is-invalid': touched.price && errors.price })} id="price" aria-describedby="price" ></Field>
              <label htmlFor="price">Precio</label>
              {touched.price && errors.price
                ? <div id="price" className="invalid-feedback">{errors.price}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <StyledDropzone element={<p>Arrastre y suelte algunos archivos aquí</p>}></StyledDropzone>
            </div>
          </div>

          <FieldArray
            name="detalles"
            render={arrayHelpers => {
              // console.log(arrayHelpers)
              return (
                <>
                  <div className="container-fluid">
                    <div className="row">
                      {values.detalles.length > 0
                        ? (
                            values.detalles.map((color, index) => {
                              const errorsColor = arrayHelpers.form.errors.detalles ? arrayHelpers.form.errors.detalles[index] : null
                              const touchedColor = arrayHelpers.form.touched.detalles ? arrayHelpers.form.touched.detalles[index] : null
                              return (
                              <div className='row mt-1' key={index} style={{ borderBottom: '2px solid black' }}>
                                <FieldArray
                                  name={`detalles[${index}].info`}
                                  render={arrayHelpers => {
                                    return (
                                      <>
                                        <div className="col-6">
                                          <div className="row">

                                            <div className="col-10">
                                              <div className="mb-3">
                                                <div className="form-floating">
                                                  {/* <ChromePicker
                                                    onChange={e => setFieldValue(`detalles[${index}.]color`, e.hex)}
                                                    color={color}
                                                    renderers={false}
                                                    disableAlpha
                                                  /> */}
                                                  <Field type='color' className={classNames('form-control', {
                                                    'is-invalid': errorsColor && touchedColor
                                                      ? !!errorsColor.color && !!touchedColor.color
                                                      : null
                                                  })} name={`detalles[${index}.]color`} id={`detalles[${index}.]color`} aria-describedby={`detalles[${index}.]color`} />
                                                  <label htmlFor="color">Color</label>
                                                  {touchedColor && errorsColor
                                                    ? touchedColor.color && errorsColor.color
                                                      ? <div id={`detalles[${index}.]color`} className="invalid-feedback">{errorsColor.color}</div>
                                                      : null
                                                    : null
                                                  }
                                                </div>
                                              </div>
                                            </div>

                                            {color.info.length > 0
                                              ? (
                                                  color.info.map((_info, index2) => {
                                                    const errorsTallaCantidad = arrayHelpers.form.errors.detalles
                                                      ? arrayHelpers.form.errors.detalles[index]
                                                        ? arrayHelpers.form.errors.detalles[index].info
                                                          ? arrayHelpers.form.errors.detalles[index].info[index2]
                                                          : null
                                                        : null
                                                      : null
                                                    const touchedTallaCantidad = arrayHelpers.form.touched.detalles
                                                      ? arrayHelpers.form.touched.detalles[index]
                                                        ? arrayHelpers.form.touched.detalles[index].info
                                                          ? arrayHelpers.form.touched.detalles[index].info[index2]
                                                          : null
                                                        : null
                                                      : null

                                                    return (
                                                    <div className='row' key={index2}>

                                                      <div className="col-5">
                                                        <div className="mb-3">
                                                          <div className="form-floating">
                                                            <Field className={classNames('form-control', {
                                                              'is-invalid': errorsTallaCantidad && touchedTallaCantidad
                                                                ? !!errorsTallaCantidad.talla && !!touchedTallaCantidad.talla
                                                                : null
                                                            })} name={`detalles[${index}].info[${index2}].talla`} id={`detalles[${index}].info[${index2}].talla`} />
                                                            <label htmlFor="talla">Talla</label>
                                                            {touchedTallaCantidad && errorsTallaCantidad
                                                              ? touchedTallaCantidad.talla && errorsTallaCantidad.talla
                                                                ? <div id={`detalles[${index}].info[${index2}].talla`} className="invalid-feedback">{errorsTallaCantidad.talla}</div>
                                                                : null
                                                              : null
                                                            }
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div className="col-5">
                                                        <div className="mb-3">
                                                          <div className="form-floating">
                                                            <Field className={classNames('form-control', {
                                                              'is-invalid': errorsTallaCantidad && touchedTallaCantidad
                                                                ? !!errorsTallaCantidad.cantidad && !!touchedTallaCantidad.cantidad
                                                                : null
                                                            })} name={`detalles[${index}].info[${index2}].cantidad`} id={`detalles[${index}].info[${index2}].talla`} />
                                                            <label htmlFor="cantidad">Cantidad</label>
                                                            {touchedTallaCantidad && errorsTallaCantidad
                                                              ? touchedTallaCantidad.cantidad && errorsTallaCantidad.cantidad
                                                                ? <div id={`detalles[${index}].info[${index2}].talla`} className="invalid-feedback">{errorsTallaCantidad.cantidad}</div>
                                                                : null
                                                              : null
                                                            }
                                                          </div>
                                                        </div>
                                                      </div>

                                                      {
                                                        index2 !== 0
                                                          ? (<div className="col-2 d-flex align-items-center justify-content-center">
                                                            <FaTrash
                                                              className='text-danger'
                                                              type="button"
                                                              onClick={() => arrayHelpers.remove(index2)} // remove a friend from the list
                                                            />

                                                          </div>)
                                                          : null

                                                      }
                                                    </div>

                                                    )
                                                  }))
                                              : null
                                            }
                                          </div>
                                        </div>
                                        <div className="col-6 d-flex align-items-center">
                                          <button className='btn btn-black w-100' type="button" onClick={() => arrayHelpers.push({})}>Agregar talla</button>
                                        </div>
                                      </>
                                    )
                                  }}
                                />

                                {index !== 0
                                  ? (<div className="row my-3">
                                    <div className="col-12 d-flex justify-content-center">
                                      <FaTrash
                                        color='#FE7F47'
                                        // className='w-100'
                                        type="button"
                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                      />
                                    </div>
                                  </div>)
                                  : null}

                              </div>
                              )
                            })
                          )
                        : null
                      }

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button className='btn btn-black w-100' type="button" onClick={() => arrayHelpers.push({ color: '', info: [{ talla: '', cantidad: '' }] })}>
                        {/* show this when user has removed all friends from the list */}
                        Nuevo Detalle
                      </button>
                    </div>
                  </div>
                </>
              )
            }}
          />

          <div className="mb-3">
            <div className="form-floating">
              <Field name='description' className={classNames('form-control', { 'is-invalid': touched.description && errors.description })} id="description" aria-describedby="description" ></Field>
              <label htmlFor="description">Descripción</label>
              {touched.description && errors.description
                ? <div id="description" className="invalid-feedback">{errors.description}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field
                as='select'
                name='state'
                className={classNames('form-select', { 'is-invalid': touched.state && errors.state })} id="state"
                aria-label="Default select example"
              >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </Field>
              <label htmlFor="state">Estado</label>
              {touched.state && errors.state
                ? <div id="state" className="invalid-feedback">{errors.state}</div>
                : null
              }
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex">
              <button type="submit" className="btn btn-black w-100">Guardar</button>
            </div>
          </div>
        </Form>
      )
      }
    </Formik >
  )
}
