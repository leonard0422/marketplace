import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import StyledDropzone from '../../../components/Dropzone'
import SliderService from '../../../services/SliderService'

const formSchema = Yup.object().shape({
  name: Yup.string().required('El nombre no puede estar vacio.'),
  files: Yup.mixed().required('Debe subir una imagen o video'),
  // description: Yup.string().required('Debe ingresar un nombre'),
  href: Yup.string().required('Debe ingresar un URL')
})

export default function SubSliderForm ({ id = null, dataSubSlider = null, handleSubmit }) {
  // const [datosSubSlider] = dataSubSlider || [null]
  // const datos = datosSubSlider.id === id
  const img = dataSubSlider ? dataSubSlider.url_image ? [dataSubSlider.url_image] : null : null
  const [data, setData] = useState([])
  // console.log(datosSubSlider)
  // console.log(datos)
  console.log(dataSubSlider)

  useEffect(() => {
    SliderService.List().then((response) => {
      setData(response)
    }).catch(console.error)
  }, [])

  return (
    <Formik
      initialValues={
        dataSubSlider != null
          ? {
              id: dataSubSlider.id,
              sub_slider: dataSubSlider.sub_slider,
              name: dataSubSlider.name,
              files: img,
              href: dataSubSlider.href
            // state: dataSubSlider.state
            }
          : {
              sub_slider: id,
              name: '',
              files: null,
              href: ''
            // state: 1
            }
      }

      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name='sub_slider' type='hidden'></Field>

          <div className="mb-3">
            <div className="form-floating">
              <Field
                name='name'
                className={classNames('form-control', { 'is-invalid': touched.name && errors.name })} id="name"
                aria-label="Default select example"
              />
              <label htmlFor="name">Nombre</label>
              {touched.name && errors.name
                ? <div id="name" className="invalid-feedback">{errors.name}</div>
                : null
              }
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <StyledDropzone maxFiles={1}></StyledDropzone>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='href' className={classNames('form-control', { 'is-invalid': touched.href && errors.href })} id="href" aria-describedby="href" ></Field>
              <label htmlFor="href">URL</label>
              {touched.href && errors.href
                ? <div id="href" className="invalid-feedback">{errors.href}</div>
                : null
              }
            </div>
          </div>

          {/* <div className="mb-3">
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
            </div> */}

          <div className="row mt-5">
            <div className="col-12 d-flex">
              <button type="submit" className="btn btn-black w-100">Guardar</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
