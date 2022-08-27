import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  name: Yup.string().required('El nombre del set es requerido'),
  description: Yup.string().required('La descripción es requerida')

})

export default function SetForm ({ dataSet = null, handleSubmit }) {
  return (
    <Formik
      initialValues={dataSet != null
        ? {
            id: dataSet.id,
            name: dataSet.name,
            description: dataSet.description
          }
        : {
            name: '',
            description: ''
          }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-3">
            <div className="form-floating">
              <Field name='name' className={classNames('form-control', { 'is-invalid': touched.name && errors.name })} id="name" aria-describedby="name" ></Field>
              <label htmlFor="name">Set</label>
              {touched.name && errors.name
                ? <div id="name" className="invalid-feedback">{errors.name}</div>
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
