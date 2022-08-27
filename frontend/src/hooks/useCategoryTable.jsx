import { useEffect, useState } from 'react'
import { useTable } from '../pages/Admin/TableProvider'
import CategoryService from '../services/CategoriaService'

export default function useCategorieTable (dependencies = []) {
  const [pending, setPending] = useState(true)
  const { data, setData, refresh } = useTable()

  useEffect(() => {
    CategoryService.GetAll().then((response) => {
      console.log(response)
      setData(response)
      setPending(false)
    }).catch(console.error)
  }, [...dependencies, refresh])

  return [data, pending]
}
