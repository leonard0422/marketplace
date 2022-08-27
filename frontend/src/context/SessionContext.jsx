import { createContext, useContext, useEffect, useState } from 'react'
import SessionService from '../utils/Session'

const SessionContext = createContext({})

function SessionProvider ({ children }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(SessionService.Validate())
  }, [])

  const start = (data) => {
    SessionService.Start(data)
    setSession(data)
  }

  const getToken = () => {
    return SessionService.Get('token')
  }

  const clear = () => {
    SessionService.Destroy()
    setSession(undefined)
  }

  const validate = () => {
    setSession(SessionService.Validate())
  }

  return (
    <SessionContext.Provider value={ { session, start, clear, validate, getToken } }>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
export default SessionProvider
