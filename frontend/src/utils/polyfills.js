
FormData.prototype.appendObject = function (obj) {
  const keys = Object.keys(obj)

  for (const key of keys) {
    this.append(key, obj[key])
  }
}

FormData.prototype.appendArray = function (array, fieldName) {
  if (!fieldName) {
    array.forEach((element, index) => {
      this.append(index, element)
    })
  } else {
    array.forEach((element, index) => {
      this.append(fieldName + '_' + index, element)
    })
  }
}
