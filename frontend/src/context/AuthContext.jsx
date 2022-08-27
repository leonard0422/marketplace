import { createContext, useContext, useState } from 'react'
import AuthService from '../services/AuthService'
import Session from '../utils/Session'

const AuthCentext = createContext(null)

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)

  const signup = (newUser, callback) => {
    return AuthService.signup(newUser, (error, _data) => {
      if (error) return callback(error)
      callback(null)
    })
  }

  const signin = (newUser, callback) => {
    return AuthService.signin(newUser, (error, data) => {
      if (error) return callback(error)
      setUser(data)
      callback(null)
    })
  }

  const signout = (callback) => {
    return AuthService.logout((error) => {
      if (error) return console.error(error)
      callback()
    })
  }

  const logout = (callback) => {
    return AuthService.logout(() => {
      setUser(undefined)
      callback()
    })
  }

  const check = () => {
    const testUser = Session.Validate()

    if (testUser === undefined) return setUser(undefined)

    AuthService.getUser((error) => {
      if (error) return setUser(undefined)
      return setUser(testUser)
    })
  }

  const value = { user, signin, signout, check, signup, logout }

  return <AuthCentext.Provider value={value}>{ children }</AuthCentext.Provider>
}

export const useAuth = () => useContext(AuthCentext)
