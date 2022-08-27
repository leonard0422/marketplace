import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import RequestOptions from '../../../services/CategoriaService'

const formSchema = Yup.object().shape({
  category_id: Yup.string().required('Debe selecionar una categoria'),
  description: Yup.string().required('El nombre de la subcategoria es requerido'),
  state: Yup.string().required('El estado es requerido')
})

export default function SubCategoryForm ({ dataSubcategoria = null, handleSubmit }) {
  // console.log(dataSubcategoria)
  const [data, setData] = useState([])

  useEffect(() => {
    RequestOptions.GetAll().then((response) => {
      setData(response)
    }).catch(console.error)
  }, [])

  return (
    <Formik
      initialValues={
        dataSubcategoria != null
          ? {
              id: dataSubcategoria.id,
              category_id: dataSubcategoria.category_id,
              description: dataSubcategoria.description,
              state: dataSubcategoria.state
            }
          : {
              id: '',
              category_id: '',
              description: '',
              state: 1
            }
      }

      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ errors, touched }) => (
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
                {data.map((item) => (
                  <option key={item.id} value={item.id}>{item.description}</option>
                ))}
              </Field>
              <label htmlFor="category_id">Categoria</label>
              {touched.category_id && errors.category_id
                ? <div id="category_id" className="invalid-feedback">{errors.category_id}</div>
                : null
              }
            </div>
          </div>

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
      )}
    </Formik>
  )
}
