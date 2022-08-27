import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function ContenListSubTabs ({ data }) {
  if (data.length === 0) return <div>No hay datos</div>

  return data.map((item, index) =>
    <div
      key={index}
      className={classNames('tab-pane fade show', { active: index === 0 })}
      id={'pills-' + item.description}
      role="tabpanel"
      aria-labelledby={'pills-' + item.category + '-tab'}
    >
      <div className="container-fluid">
        <div className="row">
          {item.subCategories.map((item, index) =>
            <div key={index} className="col-12">
              <Link to={'/' + item.description}>
                {item.description}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
