import classNames from 'classnames'
import GroupItem from './GroupItem'
import GroupButton from './GroupButton'

export default function Group ({ items, ghoupIndex }) {
  return (
      <div className={classNames('carousel-item', { active: ghoupIndex === 0 })}>

        <div className="container-fluid y scrollspy-example" data-bs-spy="scroll" data-bs-target={'#navbar-example' + ghoupIndex} data-bs-offset="0">
            {
                items.map((item, index) => {
                  return <GroupItem key={index} index={index} {...item} />
                })
            }
        </div>

        <nav id={'navbar-example' + ghoupIndex} className="navbar fixed-bottom navbar-light  px-3 justify-content-center">
            <ul className="nav nav-pills">
                {
                    items.map((item, index) => {
                      return <GroupButton key={index} index={index} name={item.name} />
                    })
                }
            </ul>
        </nav>
    </div>
  )
}
