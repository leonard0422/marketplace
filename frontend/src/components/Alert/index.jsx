import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'

const alertContext = createContext(false)

/**
 *
 * @param {{ children: ReactElement, type: 'primary' | 'success' | 'danger'}} param0 tipo de alerta
 */
export default function Alert ({ children }) {
  const [alert, setAlert] = useState(false)
  const [type, setType] = useState('primary')
  const [message, setMessage] = useState('default message')

  const showAlert = (show, type = 'primary', message = 'default message') => {
    setAlert(show)
    setType(type)
    setMessage(message)
  }

  return (
    <alertContext.Provider value={showAlert}>
      <AnimatePresence>
        {alert
          ? (createPortal(
            <motion.div
              initial={{
                opacity: 0,
                x: '200%'
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: '200%'
              }}
              key='alert'
              className={classNames('alert', {
                'alert-primary': type === 'primary',
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
              })}
              role="alert"
            >
              {message}
            </motion.div>,
            document.getElementById('portal-alert'))
            )
          : null
        }
      </AnimatePresence>
      {children}
    </alertContext.Provider>
  )
}

export const useAlert = () => useContext(alertContext)
