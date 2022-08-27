import { createContext, useState, useContext } from 'react'

const tableContext = createContext()

export function TableProvider ({ children }) {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const value = { data, setData, refresh, setRefresh }
  return (
        <tableContext.Provider value={value}>
            {children}
        </tableContext.Provider>
  )
}

export const useTable = () => {
  return useContext(tableContext)
}
