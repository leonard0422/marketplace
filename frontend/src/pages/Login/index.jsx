import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import classNames from 'classnames'
import './style.css'
import { useLoading } from '../../components/LoadingModal'
import { useAuth } from '../../context/AuthContext'
import { ErrorFormat } from '../../utils/ErrorFormat'
import { showAlert } from '../../utils/VexAlerts'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('No es un email valido.').required('Este campo es requerido.'),
  password: Yup.string().min(6, 'La contraseña debe tener minimo 6 caracteres').required('Este campo es requerido.')
})

function Login () {
  const loading = useLoading()
  const navigate = useNavigate()
  const { signin } = useAuth()

  function HandleLogin (values) {
    loading(true)
    signin(values, (error) => {
      loading(false)
      if (error) return showAlert(ErrorFormat[error.error])
      navigate('/', { replace: true })
    })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: HandleLogin,
    validationSchema: LoginSchema
  })

  return (
    <div className="container-fluid h-vh-100 d-flex align-items-center">
        <div className="row">

            <div className="col-4 offset-1">
                <h3>Iniciar Sesión</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        type='text'
                        className={classNames('form-control', { 'is-invalid': !!(formik.touched.email && formik.errors.email) })}
                        placeholder="E-mail"
                        {...formik.getFieldProps('email')}
                      />
                      {formik.touched.email && formik.errors.email
                        ? <div id="email" className="invalid-feedback">{formik.errors.email}</div>
                        : null
                      }
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type='password'
                        className={classNames('form-control', { 'is-invalid': !!(formik.touched.password && formik.errors.password) })}
                        placeholder="Contraseña"
                        {...formik.getFieldProps('password')}
                      />
                      {formik.touched.password && formik.errors.password
                        ? <div id="email" className="invalid-feedback">{formik.errors.password}</div>
                        : null
                      }
                    </div>
                    <button type="submit" className="btn btn-black mt-3">INICIAR SESIÓN</button>
                </form>
            </div>

            <div className="col-5 offset-2">
                <h4>REGÍSTRATE</h4>
                <p>
                  SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.
                </p>
                <p>
                  TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE COMPRA.
                </p>
                <Link to="/Singup" className="btn btn-black mt-5">CREAR CUENTA </Link>
            </div>

        </div>
    </div>
  )
}

export default Login
