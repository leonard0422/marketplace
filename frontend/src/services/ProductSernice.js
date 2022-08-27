import RequestOptions from '../utils/RequestOption'
import TokenError from '../utils/TokenError'
import Service from './Service'

export default class ProductService extends Service {
  static async Add (values) {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + '/api/admin/product/add',
        RequestOptions.PostRequestOptionsWithToken(values)
      )
      const data = await response.json()

      if (!response.ok) throw new TokenError(response)

      return data
    } catch (error) {
      return new Error(error)
    }
  }
}
