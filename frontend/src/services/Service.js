
export default class Service {
  static FormatArrayr (name, data) {
    return data.map((items) => {
      const values = Object.values(items[name])
      items[name] = values
      return items
    })
  }
}
