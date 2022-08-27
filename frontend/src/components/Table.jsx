
// import { FaPlus, FaEdit, FaTrashAlt, FaAngleDown } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import FilterComponent from './FilterComponent'
import { useMemo, useState } from 'react'

export default function Table (props) {
  // console.log(props.data)
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const filteredItems = props.data
    ? props.data.filter(
      item =>
        JSON.stringify(item)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
    )
    : null

  const subHeaderComponentMemo = useMemo(() => {
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
  return (
    <DataTable
      pagination
      paginationComponentOptions={{ rowsPerPageText: 'Filas por página:' }}
      defaultSortFieldID={1}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      noDataComponent={<div className='my-5 display-6'> No hay registros que mostrar </div> }
      progressComponent={<div className='my-5 display-5'>Cargando...</div>}
      {...props}
      data={filteredItems}
    />

  )
}
