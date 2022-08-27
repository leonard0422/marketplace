import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
// import StyledDropzone from '../../../components/Dropzone'

// console.log(Notempty())
const formSchema = Yup.object().shape({
  name: Yup.string().required('El nombre no puede estar vacio.')
  // files: Yup.mixed().required('Debe subir una imagen o video'),
  // description: Yup.string().required('Debe ingresar un nombre'),
  // href: Yup.string().required('Debe ingresar un URL')
  // state: Yup.string().required('El estado es requerido')
})

export default function SliderForm ({ data = null, handleSubmit }) {
  // const img = data ? data.url_image ? [data.url_image] : null : null
  // console.log(img)
  return (
    <Formik
      initialValues={
        data != null
          ? {
              id: data.id,
              name: data.name
              // files: img,
              // href: data.href
              // state: data.state
            }
          : {
              name: ''
              // files: null,
              // href: ''
              // state: 1
            }
      }

      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          {/* <Field name='id' type=''></Field> */}
          <div className="mb-3">
            <div className="form-floating">
              <Field
                name='name'
                className={classNames('form-control', { 'is-invalid': touched.name && errors.name })} id="name"
                aria-label="Default select example"
              />
              <label htmlFor="category_id">Nombre</label>
              {touched.name && errors.name
                ? <div id="name" className="invalid-feedback">{errors.name}</div>
                : null
              }
            </div>
          </div>

          {/* <div className="mb-3">
            <div className="form-floating">
              <StyledDropzone maxFiles={1} ></StyledDropzone>
            </div>
          </div> */}

          {/* <div className="mb-3">
            <div className="form-floating">
              <Field name='description' className={classNames('form-control', { 'is-invalid': touched.description && errors.description })} id="description" aria-describedby="description" ></Field>
              <label htmlFor="description">Nombre Etiqueta</label>
              {touched.description && errors.description
                ? <div id="description" className="invalid-feedback">{errors.description}</div>
                : null
              }
            </div>
          </div> */}

          {/* <div className="mb-3">
            <div className="form-floating">
              <Field name='href' className={classNames('form-control', { 'is-invalid': touched.href && errors.href })} id="href" aria-describedby="href" ></Field>
              <label htmlFor="href">URL</label>
              {touched.href && errors.href
                ? <div id="href" className="invalid-feedback">{errors.href}</div>
                : null
              }
            </div>
          </div> */}

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
