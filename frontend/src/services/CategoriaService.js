import RequestOptions from '../utils/RequestOption'
import TokenError from '../utils/TokenError'
import Service from './Service'

export default class CategoryService extends Service {
  static async Add (body) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/category/add',
        RequestOptions.PostRequestOptionsWithToken(body)
      )
      const data = await response.json()

      if (!response.ok) throw new TokenError(response)
      return data
    } catch (error) {
      return new Error(error)
    }
  }

  static async GetAll () {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/category/get',
        RequestOptions.GetRequestOPtionsWithToken()
      )
      const data = await response.json()

      return data.map(({ id, state, description }) => ({ id, state, description }))
    } catch (error) {
      return error
    }
  }

  static async Get (id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/category/get/' + id,
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
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/category/update/' + body.id,
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
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/category/delete/' + id,
        RequestOptions.DeleteRequestOPtions(id)
      )
      const data = await response.json()

      return data
    } catch (error) {
      return error
    }
  }

  static async List () {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/client/category/list',
        RequestOptions.GetRequestOPtions()
      )
      const data = await response.json()

      return CategoryService.FormatArrayr('subCategories', data)
    } catch (error) {
      return error
    }
  }
}
