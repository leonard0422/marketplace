
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import './style.css'

export default function ModalLayer ({ children, center = 'center' }) {
  return createPortal(
      <motion.div
        id="ModalLayer"
        style={{ justifyContent: center }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{ justifyContent: center }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
      , document.getElementById('portal'))
}
