import RequestOptions from '../utils/RequestOption'
import TokenError from '../utils/TokenError'
import Service from './Service'

export default class SetService extends Service {
  static async Add (body) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/set/add',
        RequestOptions.PostRequestOptionsWithToken(body)
      )
      const data = await response.json()

      if (!response.ok) throw new TokenError(response)
      return data
    } catch (error) {
      return error
    }
  }

  static async GetAll () {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/set/get',
        RequestOptions.GetRequestOPtionsWithToken()
      )
      const data = await response.json()

      return data.map(({ id, name, description }) => ({ id, name, description }))
    } catch (error) {
      return error
    }
  }

  static async Get (id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/set/get/' + id,
        RequestOptions.GetRequestOPtionsWithToken()
      )
      const data = await response.json()

      return data.map(({ id, state, description }) => ({ id, state, description }))
    } catch (error) {
      return error
    }
  }

  static async Update (body) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/set/update/' + body.id,
        RequestOptions.PutRequestOPtions(body)
      )
      const data = await response.json()

      return data
    } catch (error) {
      return error
    }
  }

  static async Delete (id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/set/delete/' + id,
        RequestOptions.DeleteRequestOPtions(id)
      )
      const data = await response.json()

      return data
    } catch (error) {
      return error
    }
  }
}
