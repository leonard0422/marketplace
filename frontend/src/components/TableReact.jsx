
// import DataTable from 'react-data-table-component'

// // A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

// const columns = [
//   {
//     name: 'Title',
//     selector: row => row.title
//   },
//   {
//     name: 'Year',
//     selector: row => row.year
//   },
//   {
//     name: 'mes',
//     selector: row => row.mes
//   },
//   {
//     name: 'dia',
//     selector: row => row.dia
//   },
//   {
//     name: 'hora',
//     selector: row => row.hora
//   },
//   {
//     name: 'minuto',
//     selector: row => row.minuto
//   },
//   {
//     name: 'segundo',
//     selector: row => row.segundo
//   },
//   {
//     name: 'estado',
//     selector: row => row.estado
//   },
//   {
//     name: 'accion',
//     selector: row => row.accion
//   }
// ]

// const data = [
//   {
//     id: 1,
//     title: 'Beetlejuice',
//     year: '1988',
//     mes: 'octubre',
//     dia: '12',
//     hora: '12:00',
//     minuto: '00',
//     segundo: '00',
//     estado: 'Pendiente',
//     accion: 'Editar'
//   },
//   {
//     id: 2,
//     title: 'Ghostbusters',
//     year: '1984'
//   }
// ]

// export default function MyComponent () {
//   return (
//         <DataTable
//             columns={columns}
//             data={data}
//             expandableRows
//             expandableRowsComponent={ExpandedComponent}
//         />
//   )
// };

import React from 'react'
// import ReactDOM from 'react-dom'
import DataTable from 'react-data-table-component'
import movies from './movies'
import FilterComponent from './FilterComponent'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'bootstrap/dist/css/bootstrap.css'
// import './styles.css'

function getNumberOfPages (rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage)
}

function toPages (pages) {
  const results = []

  for (let i = 1; i < pages; i++) {
    results.push(i)
  }

  return results
}

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
    sortable: true
  },
  {
    name: 'Directior',
    selector: (row) => row.director,
    sortable: true
  },
  {
    name: 'Runtime (m)',
    selector: (row) => row.runtime,
    sortable: true,
    right: true
  },
  {
    button: true,
    cell: (row, index, columns, id) => (

      <div className="App">
        {/* <h1>{JSON.stringify(row)}</h1> */}
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Open modal
          </button>
          <div className="modal" tabIndex="-1" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

// RDT exposes the following internal pagination properties
// const BootyPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage, // available but not used here
//   currentPage
// }) => {
//   const handleBackButtonClick = () => {
//     onChangePage(currentPage - 1)
//   }

//   const handleNextButtonClick = () => {
//     onChangePage(currentPage + 1)
//   }

//   const handlePageNumber = (e) => {
//     onChangePage(Number(e.target.value))
//   }

//   const pages = getNumberOfPages(rowCount, rowsPerPage)
//   const pageItems = toPages(pages)
//   const nextDisabled = currentPage === pageItems.length
//   const previosDisabled = currentPage === 1

//   return (
//     <nav>
//       <ul className="pagination">
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleBackButtonClick}
//             disabled={previosDisabled}
//             aria-disabled={previosDisabled}
//             aria-label="previous page"
//           >
//             Previous
//           </button>
//         </li>
//         {pageItems.map((page) => {
//           const className =
//             page === currentPage ? 'page-item active' : 'page-item'

//           return (
//             <li key={page} className={className}>
//               <button
//                 className="page-link"
//                 onClick={handlePageNumber}
//                 value={page}
//               >
//                 {page}
//               </button>
//             </li>
//           )
//         })}
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleNextButtonClick}
//             disabled={nextDisabled}
//             aria-disabled={nextDisabled}
//             aria-label="next page"
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
//   <div className="form-check">
//     <input
//       htmlFor="booty-check"
//       type="checkbox"
//       className="form-check-input"
//       ref={ref}
//       onClick={onClick}
//       {...rest}
//     />
//     <label className="form-check-label" id="booty-check" />
//   </div>
// ))

export default function MyComponent () {
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)
  const filteredItems = movies.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  )
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    )
  }, [filterText, resetPaginationToggle])

  // console.log(filteredItems)
  return (
    <div className="App">
      <div className="card">
        <DataTable
          title="Movies"
          columns={columns}
          data={filteredItems}
          pagination
          defaultSortFieldID={1}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          // paginationComponent={BootyPagination}
          // selectaebleRows
        // selectableRowsComponent={BootyCheckbox}
        />
      </div>
    </div>
  )
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
