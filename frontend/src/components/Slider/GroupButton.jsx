import classNames from 'classnames'

export default function GroupButton ({ name, index }) {
  return (
    <li className="nav-item">
        <a className={classNames('nav-link', { active: index === 0 })} href={'#' + name + index}>{name}</a>
    </li>
  )
}
