export default function BuscadorNavbar () {
  return (
        <div className="header__content-center">
            <form className="ps-form--quick-search" action="index.html" method="get">
                <div className="form-group--icon">
                    <i className="icon-chevron-down"></i>
                    <select className="form-control">
                        <option value="1">All</option>
                        <option value="1">Smartphone</option>
                        <option value="1">Sounds</option>
                        <option value="1">Technology toys</option>
                    </select>
                </div>
                <input className="form-control" type="text" placeholder="I'm shopping for..." />
                <button>Search</button>
            </form>
        </div>
  )
}
