import { Link } from 'react-router-dom'
import DashboardAsideOption from './DashboardAsideOption'
import { Asset } from '../utils/source'

export default function DashboardAside () {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ">
      <li className="nav-item p-2 shadow rounded">
        <Link className="navbar-brand" to="/"><img className="w-100" src={Asset('/storage/assets/logos/logo.png')} alt="" /></Link>
      </li>
      <DashboardAsideOption >Inicio</DashboardAsideOption>
      <DashboardAsideOption to="categoria-admin">Categoria</DashboardAsideOption>
      <DashboardAsideOption to="sub-categoria-admin">SubCategoria</DashboardAsideOption>
      <DashboardAsideOption to="producto-admin">Producto</DashboardAsideOption>
      <DashboardAsideOption to="set-admin">Set</DashboardAsideOption>
      <DashboardAsideOption to="slider-admin">Slider</DashboardAsideOption>
      <DashboardAsideOption to="/">Salir</DashboardAsideOption>
    </ul>
  )
}
