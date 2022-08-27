
export function ObjectToFormData (obj, form) {
  const keys = Object.keys(obj)

  for (const key of keys) {
    form.append(key, obj[key])
  }
}
