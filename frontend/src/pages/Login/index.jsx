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
    <div className="ps-my-account">

      <div className="container">

        <form className="ps-form--account ps-tab-root" action="link.html" method="get">

          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link ps-btn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link ps-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">

            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              {/* Login Form */}
              <div className="ps-form__content">

                <h5>Log In Your Account</h5>

                <div className="form-group">

                  <input className="form-control" type="text" placeholder="Username or email address" />

                </div>

                <div className="form-group form-forgot">

                  <input className="form-control" type="text" placeholder="Password" />

                  <a href="">Forgot?</a>

                </div>

                <div className="form-group">

                  <div className="ps-checkbox">

                    <input className="form-control" type="checkbox" id="remember-me" name="remember-me" />

                    <label htmlFor="remember-me">Rememeber me</label>

                  </div>

                </div>

                <div className="form-group submtit">

                  <button className="ps-btn ps-btn--fullwidth">Login</button>

                </div>

              </div>
              {/* <!-- End Login Form --> */}
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              {/* Register Form */}
              <div className="ps-form__content">

                <h5>Register An Account</h5>

                <div className="form-group">

                  <input className="form-control" type="text" placeholder="First name" />

                </div>

                <div className="form-group">

                  <input className="form-control" type="text" placeholder="Last name" />

                </div>

                <div className="form-group">

                  <input className="form-control" type="text" placeholder="Username" />

                </div>

                <div className="form-group">

                  <input className="form-control" type="email" placeholder="Email address" />

                </div>

                <div className="form-group">

                  <input className="form-control" type="text" placeholder="Password" />

                </div>

                <div className="form-group submtit">

                  <button className="ps-btn ps-btn--fullwidth">Register</button>

                </div>

              </div>
              {/* <!-- End Register Form --> */}

            </div>

          </div>

          <div className="ps-tabs">

          </div>

        </form>

      </div>

    </div>

  // <div className="container-fluid h-vh-100 d-flex align-items-center">
  //     <div className="row">

  //         <div className="col-4 offset-1">
  //             <h3>Iniciar Sesión</h3>
  //             <form onSubmit={formik.handleSubmit}>
  //                 <div className="form-group">
  //                   <input
  //                     type='text'
  //                     className={classNames('form-control', { 'is-invalid': !!(formik.touched.email && formik.errors.email) })}
  //                     placeholder="E-mail"
  //                     {...formik.getFieldProps('email')}
  //                   />
  //                   {formik.touched.email && formik.errors.email
  //                     ? <div id="email" className="invalid-feedback">{formik.errors.email}</div>
  //                     : null
  //                   }
  //                 </div>
  //                 <div className="form-group mt-3">
  //                   <input
  //                     type='password'
  //                     className={classNames('form-control', { 'is-invalid': !!(formik.touched.password && formik.errors.password) })}
  //                     placeholder="Contraseña"
  //                     {...formik.getFieldProps('password')}
  //                   />
  //                   {formik.touched.password && formik.errors.password
  //                     ? <div id="email" className="invalid-feedback">{formik.errors.password}</div>
  //                     : null
  //                   }
  //                 </div>
  //                 <button type="submit" className="btn btn-black mt-3">INICIAR SESIÓN</button>
  //             </form>
  //         </div>

  //         <div className="col-5 offset-2">
  //             <h4>REGÍSTRATE</h4>
  //             <p>
  //               SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.
  //             </p>
  //             <p>
  //               TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE COMPRA.
  //             </p>
  //             <Link to="/Singup" className="btn btn-black mt-5">CREAR CUENTA </Link>
  //         </div>

  //     </div>
  // </div>
  )
}

export default Login
