import RequestOptions from '../utils/RequestOption'
import TokenError from '../utils/TokenError'
import Service from './Service'

export default class SliderService extends Service {
  static async Add (body) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/slider/add',
        RequestOptions.PostRequestOptionsRawWithToken(body)
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
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/slider/get',
        RequestOptions.GetRequestOPtionsWithToken()
      )
      const data = await response.json()

      return SliderService.FormatArrayr('sub_sliders', data)
    } catch (error) {
      return error
    }
  }

  static async List () {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/client/slider/get',
        RequestOptions.GetRequestOPtions()
      )
      const data = await response.json()

      return SliderService.FormatArrayr('sub_sliders', data)
    } catch (error) {
      return error
    }
  }

  static async Get (id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/slider/get/' + id,
        RequestOptions.GetRequestOPtionsWithToken()
      )
      const data = await response.json()

      return data.map(({ id, state, description }) => ({ id, state, description }))
    } catch (error) {
      return error
    }
  }

  static async Update (body, id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/slider/update/' + id,
        RequestOptions.PostRequestOptionsRawWithToken(body)
      )
      const data = await response.json()

      if (!response.ok) throw new TokenError(response)
      return data
    } catch (error) {
      return error
    }
  }

  static async Delete (id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/slider/delete/' + id,
        RequestOptions.DeleteRequestOPtions(id)
      )
      const data = await response.json()

      return data
    } catch (error) {
      return error
    }
  }
}
