import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useAuth } from '../../context/AuthContext'
import { useLoading } from '../../components/LoadingModal'
import { useAlert } from '../../components/AlertModal'
import { ErrorFormat } from '../../utils/ErrorFormat'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Debes ingresar un correo valido').required('El correo es requerido'),
  password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
  repet_password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
  name: Yup.string().required('El nombre es requerido'),
  last_name: Yup.string().required('El apellido es requerido'),
  document_type_id: Yup.string().required('El tipo de documento es requerido'),
  document: Yup.number().required('El número de documento es requerido'),
  departament_id: Yup.string().required('El departamento es requerido'),
  city_id: Yup.string().required('La ciudad es requerida'),
  address: Yup.string().required('La dirección es requerida'),
  neighborhood: Yup.string().required('El barrio es requerido'),
  phone: Yup.string().required('El teléfono es requerido')
})

function Singup () {
  const navigate = useNavigate()
  const loading = useLoading()
  const showAlert = useAlert()

  const { signup } = useAuth()

  function HandleSingup (values) {
    signup(values, (error) => {
      loading(false)
      if (error) return showAlert(true, ErrorFormat[error.error])
      navigate('/login', { replace: true })
    })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repet_password: '',
      name: '',
      last_name: '',
      document_type_id: '',
      document: '',
      departament_id: '',
      city_id: '',
      address: '',
      neighborhood: '',
      additional_info: '',
      phone: ''

    },
    onSubmit: HandleSingup,
    validationSchema: SignupSchema

  })

  return (
        < div className="container-fluid h-vh-100 d-flex align-items-center" >

            <div className="col-5 offset-1">
                <h3>DATOS PERSONALES</h3>
                <form onSubmit={formik.handleSubmit}>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <div className="form-floating">
                                    <input type="text" className={classNames('form-control', { 'is-invalid': !!(formik.touched.email && formik.errors.email) })} id="email" placeholder="E-MAIL" {...formik.getFieldProps('email')} />
                                    <label htmlFor="email">E-MAIL</label>
                                    {formik.touched.email && formik.errors.email
                                      ? <div id="email" className="invalid-feedback">{formik.errors.email}</div>
                                      : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="password" className={classNames('form-control', { 'is-invalid': !!(formik.touched.password && formik.errors.password) })} id="password" placeholder="CONTRASEÑA" {...formik.getFieldProps('password')} />
                                    <label htmlFor="password">CONTRASEÑA</label>
                                    {formik.touched.password && formik.errors.password ? <div id="password" className="invalid-feedback">{formik.errors.password}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="password" className={classNames('form-control', { 'is-invalid': !!(formik.touched.repet_password && formik.errors.repet_password) })} id="repet_password" placeholder="REPETIR CONTRASEÑA" {...formik.getFieldProps('repet_password')} />
                                    <label htmlFor="repet_password">REPETIR CONTRASEÑA</label>
                                    {formik.touched.repet_password && formik.errors.repet_password ? <div id="repet_password" className="invalid-feedback">{formik.errors.repet_password}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="text" className={classNames('form-control', { 'is-invalid': !!(formik.touched.name && formik.errors.name) })} id="name" placeholder="NOMBRES" {...formik.getFieldProps('name')} />
                                    <label htmlFor="name">NOMBRES</label>
                                    {formik.touched.name && formik.errors.name ? <div id="name" className="invalid-feedback">{formik.errors.name}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="text" className={classNames('form-control', { 'is-invalid': !!(formik.touched.last_name && formik.errors.last_name) })} id="last_name" placeholder="APELLIDOS" {...formik.getFieldProps('last_name')} />
                                    <label htmlFor="last_name">APELLIDOS</label>
                                    {formik.touched.last_name && formik.errors.last_name ? <div id="last_name" className="invalid-feedback">{formik.errors.last_name}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating">
                                <select defaultValue={''} className={classNames('form-control', { 'is-invalid': !!(formik.touched.document_type_id && formik.errors.document_type_id) })} id="document_type_id" aria-label="Default select example" {...formik.getFieldProps('document_type_id')}>
                                    <option value="">--</option>
                                    <option value="1">Cedula ciudadanía</option>
                                    <option value="2">Cedula extranjería</option>
                                </select>
                                <label htmlFor="document_type_id">TIPO DE DOCUMENTO</label>
                                {formik.touched.document_type_id && formik.errors.document_type_id ? <div id="document_type_id" className="invalid-feedback">{formik.errors.document_type_id}</div> : null}

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <div className="form-floating">
                                    <input type="number" className={classNames('form-control', { 'is-invalid': !!(formik.touched.document && formik.errors.document) })} id="document" placeholder="NÚMERO DE DOCUMENTO" {...formik.getFieldProps('document')} />
                                    <label htmlFor="document">NÚMERO DE DOCUMENTO</label>
                                    {formik.touched.document && formik.errors.document ? <div id="document_type_id" className="invalid-feedback">{formik.errors.document}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <select defaultValue={''} className={classNames('form-control', { 'is-invalid': !!(formik.touched.departament_id && formik.errors.departament_id) })} aria-label="Default select example" {...formik.getFieldProps('departament_id')}>
                                        <option value="">--</option>
                                        <option value="1">CUNDINAMARCA</option>
                                        <option value="2">MAGDALENA</option>
                                    </select>
                                    <label htmlFor="departament_id">DEPARTAMENTO</label>
                                    {formik.touched.departament_id && formik.errors.departament_id ? <div id="departament_id" className="invalid-feedback">{formik.errors.departament_id}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <select defaultValue={''} className={classNames('form-control', { 'is-invalid': !!(formik.touched.city_id && formik.errors.city_id) })} id="city_id" aria-label="Default select example" {...formik.getFieldProps('city_id')}>
                                        <option value="">--</option>
                                        <option value="1">GIRARDOT</option>
                                        <option value="2">SANTA MARTA</option>
                                    </select>
                                    <label htmlFor="city_id">MUNICIPIO</label>
                                    {formik.touched.city_id && formik.errors.city_id ? <div id="city_id" className="invalid-feedback">{formik.errors.city_id}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="text" className={classNames('form-control', { 'is-invalid': !!(formik.touched.address && formik.errors.address) })} id="address" placeholder="DIRECCIÓN" {...formik.getFieldProps('address')} />
                                    <label htmlFor="address">DIRECCIÓN</label>
                                    {formik.touched.address && formik.errors.address ? <div id="address" className="invalid-feedback">{formik.errors.address}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="text" className={classNames('form-control', { 'is-invalid': !!(formik.touched.neighborhood && formik.errors.neighborhood) })} id="neighborhood" placeholder="BARRIO" {...formik.getFieldProps('neighborhood')} />
                                    <label htmlFor="neighborhood">BARRIO</label>
                                    {formik.touched.neighborhood && formik.errors.neighborhood ? <div id="neighborhood" className="invalid-feedback">{formik.errors.neighborhood}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="text" className="form-control" placeholder="INFORMACIÓN ADICIONAL" {...formik.getFieldProps('additional_info')} />
                                    <label htmlFor="additional_info">INFORMACIÓN ADICIONAL</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <div className="form-floating">
                                    <input type="number" className={classNames('form-control', { 'is-invalid': !!(formik.touched.phone && formik.errors.phone) })} id="phone" placeholder="CELULAR" {...formik.getFieldProps('phone')} />
                                    <label htmlFor="additional_info">CELULAR</label>
                                    {formik.touched.phone && formik.errors.phone ? <div id="phone" className="invalid-feedback">{formik.errors.phone}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-black mt-3">CREAR CUENTA</button>
                </form>
            </div >
        </div >
  )
}

export default Singup
