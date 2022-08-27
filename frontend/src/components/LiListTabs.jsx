import classNames from 'classnames'

export default function LiListTabs ({ data }) {
  if (data.linght === 0) return <div>No hay datos</div>

  return data.map((item, index) =>
    <li key={index} className="nav-item" role="presentation" >
      <button
        className={classNames('nav-link', { active: index === 0 })}
        id={'pills-' + item.description + '-tab'}
        data-bs-toggle="pill"
        data-bs-target={'#pills-' + item.description}
        type="button"
        role="tab"
        aria-controls={'pills-' + item.description}
        aria-selected="true"
      >
        {item.description}
      </button>
    </li>
  )
}
