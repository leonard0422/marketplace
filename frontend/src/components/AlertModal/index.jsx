import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import './style.css'
import { createContext, useContext, useState } from 'react'

const AlertContext = createContext(false)

function Alert ({ message, close }) {
  return (
      <motion.div
        id="alert"
        onClick={() => close(false)}
        >
          <motion.div
              id="alert-item"
              initial={ { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
          >
          <p>{message}</p>
          </motion.div>
      </motion.div>
  )
}

function AlertProvider ({ children }) {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')

  const activate = (action, message = '') => {
    setShow(action)
    setMessage(message)
  }

  return (
    <AlertContext.Provider value={activate}>
      { show ? createPortal(<Alert close={setShow} message={message} />, document.getElementById('portal')) : null}
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => useContext(AlertContext)

export default AlertProvider
