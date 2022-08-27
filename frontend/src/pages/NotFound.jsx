import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className="display-1"><strong>404 Pagina no encontrada.</strong></h1>
      <br />
      <Link to='/'>Volver al inicio.</Link>
    </div>
  )
}
