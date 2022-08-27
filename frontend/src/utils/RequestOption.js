import Session from '../utils/Session'

export default class RequestOptions {
  static PostRequestOptions (body) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }

  static PostRequestOptionsWithToken (body) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Session.Get('token')
      },
      body: JSON.stringify(body)
    }
  }

  static PostRequestOptionsRaw (body) {
    return {
      method: 'POST',
      body
    }
  }

  static PostRequestOptionsRawWithToken (body) {
    return {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + Session.Get('token')
      },
      body
    }
  }

  static PutRequestOPtions (body) {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Session.Get('token')
      },
      body: JSON.stringify(body)
    }
  }

  static PutRequestOPtionsRawWithToken (body) {
    return {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + Session.Get('token')
      },
      body
    }
  }

  static DeleteRequestOPtions () {
    return {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + Session.Get('token')
      }
    }
  }

  static GetRequestOPtionsWithToken () {
    return {
      headers: {
        Authorization: 'Bearer ' + Session.Get('token')
      }
    }
  }

  static GetRequestOPtions () {
    return { method: 'GET' }
  }
}
