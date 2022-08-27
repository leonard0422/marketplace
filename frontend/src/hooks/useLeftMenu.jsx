import { useEffect, useState } from 'react'
import CategoryService from '../services/CategoriaService'

export default function useCategoryAndSub () {
  const [categories, setCategories] = useState([])
  const [pending, setPending] = useState(true)

  useEffect(() => {
    CategoryService.List().then(data => {
      setCategories(data)
      setPending(false)
    }).catch(console.error)
  }, [])

  return { categories, pending }
}
