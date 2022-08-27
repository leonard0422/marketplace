
export default function ValidarExtension (extension) {
// Valida que la extencion es un video o una imagen y retorna true o false
  if (extension === 'jpg' || extension === 'png' || extension === 'jpeg' || extension === 'gif') {
    return true
  } else {
    return false
  }
}
