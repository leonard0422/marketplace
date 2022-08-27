
export default class TokenError extends Error {
  constructor (response) {
    super(response.status)
  }
}
