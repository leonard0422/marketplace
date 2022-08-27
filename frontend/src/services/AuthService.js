import RequestOptions from '../utils/RequestOption'

export default class AuthService {
  user = null

  static async signup (newUser, callback) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL_AUTH + '/register',
        RequestOptions.PostRequestOptions(newUser)
      )

      const data = await response.json()
      if (!response.ok) return callback(data)
      window.localStorage.setItem('session', JSON.stringify(data))
      callback(null, data)
    } catch (error) {
      callback(error)
    }
  }

  static async signin (newUser, callback) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL_AUTH + '/login',
        RequestOptions.PostRequestOptions(newUser)
      )

      const data = await response.json()
      if (!response.ok) return callback(data)
      window.localStorage.setItem('session', JSON.stringify(data))
      callback(null, data)
    } catch (error) {
      callback(error)
    }
  }

  static async logout (callback) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL_AUTH + '/logout',
        RequestOptions.GetRequestOPtionsWithToken()
      )

      const data = await response.json()
      if (!response.ok) callback(data)
      window.localStorage.clear()
      callback()
    } catch (error) {
      window.localStorage.clear()
      callback(error)
    }
  }

  static async getUser (callback) {
    try {
      const respones = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL_AUTH + '/me',
        RequestOptions.GetRequestOPtionsWithToken()
      )

      const data = await respones.json()
      if (!respones.ok) {
        window.localStorage.clear()
        return callback(data)
      }

      callback(null)
    } catch (error) {
      window.localStorage.clear()
      callback(error)
    }
  }

  static async validateRole (callback) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL_AUTH + '/validateRole',
        RequestOptions.GetRequestOPtionsWithToken()
      )

      const data = await response.json()
      if (!response.ok) return callback(data)

      callback(null, data)
    } catch (error) {
      callback(error)
    }
  }
}
