import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import './style.css'
import { createContext, useContext, useState } from 'react'

const LoadingContext = createContext(false)

export function ModalLoadnig () {
  return (
      <div id="loading">
          <motion.div
              id="loading-item"
              initial={ { height: '10%' }}
              animate={{ rotate: 180 }}
              transition={{ duration: 1, repeat: Infinity }}
          />
      </div>
  )
}

function LoadingProvider ({ children }) {
  const [show, setShow] = useState(false)

  return (
    <LoadingContext.Provider value={setShow}>
      { show ? createPortal(<ModalLoadnig />, document.getElementById('portal')) : null}
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)

export default LoadingProvider
