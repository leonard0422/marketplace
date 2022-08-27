
/**
 * Administra informacion de la sesion
 */
class Session {
  /**
   * Inicializa la sesion
   * @param {Object<any>} data
   */
  static Start (data) {
    const session = window.localStorage.getItem('session')

    if (session === null || session.setItem.lenght <= 0) {
      window.localStorage.setItem('session', JSON.stringify(data))
    }
  }

  /**
   * Devuelve todos los datos de la session
   * @returns {Object<any>}
   */
  static GetAll () {
    return JSON.parse(window.localStorage.getItem('session'))
  }

  /**
   * Obtiene informacion parcial de la sesion actual
   * @param {string} key
   * @returns {Object<any>}
   */
  static Get (key) {
    const session = JSON.parse(window.localStorage.getItem('session'))
    if (session) return session[key]
    return null
  }

  /**
   * Asigna informacion parcial en la sesion actual
   * @param {string} key
   * @param {Object<any>} data
   */
  static Set (key, data) {
    const session = JSON.parse(window.localStorage.getItem('session'))

    if (session === null || session.setItem.lenght <= 0) throw new Error('No hay ninguna sesion Inicializada')
    if (session[key] === undefined) throw new Error(`No existe el atributo '${key}' dentro de la sesion`)

    session[key] = data
  }

  /**
   * valida la sesion actual
   * @returns {Boolean}
   */
  static Validate () {
    const session = window.localStorage.getItem('session')

    if (session === null || session.length <= 0) {
      return undefined
    } else return JSON.parse(session)
  }

  /**
   * Destrye la sesion actual
   */
  static Destroy () {
    window.localStorage.removeItem('session')
  }
}

export default Session
