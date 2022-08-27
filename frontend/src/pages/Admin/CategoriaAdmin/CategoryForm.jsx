import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useAlert } from '../../../components/Alert'
import { useEffect } from 'react'

const formSchema = Yup.object().shape({
  description: Yup.string().required('El nombre de la categoria es requerido'),
  state: Yup.string().required('El estado es requerido')
})

export default function CategoryForm ({ data = null, handleSubmit }) {
  const alert = useAlert()
  // console.log(data)
  useEffect(() => alert(true), [])
  return (
    <Formik
      initialValues={data != null
        ? {
            id: data.id,
            description: data.description,
            state: data.state
          }
        : {
            id: '',
            description: '',
            state: 1
          }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name='id' type=''></Field>

          <div className="mb-3">
            <div className="form-floating">
              <Field name='description' className={classNames('form-control', { 'is-invalid': touched.description && errors.description })} id="description" aria-describedby="description" ></Field>
              <label htmlFor="description">Nombre Categoria</label>
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
                className={classNames('form-control', { 'is-invalid': touched.state && errors.state })} id="state"
                aria-label="Default select example"
              >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </Field>
              <label htmlFor="state">Estado</label>
              {touched.description && errors.state
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
      )}
    </Formik>
  )
}
