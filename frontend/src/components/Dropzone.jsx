import { Field } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaTrashAlt } from 'react-icons/fa'
import './style.css'
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
}

export function Notempty (file) {
  // console.log(file)
  if (!file) {
    return {
      code: 'notempty',
      message: 'Debe ingresar un archivo'
    }
  }

  return null
}

export default function StyledDropzone ({ _data = null, element = null, maxFiles }) {
  // console.log(data)
  const [files, setFiles] = useState([])
  // console.log(files)
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    accept: {
      'image/*': [],
      'video/*': []
    },
    maxFiles,
    useFsAccessApi: false,
    validator: Notempty,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  })

  const removeFile = file => () => {
    // console.log(file)
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbs = files.map(file => {
    if (file.type.includes('image')) {
      return (
        <div className="col-4 my-3 position-relative img-person" key={file.name}>
          <div className="row">
            <div className="col-12">
              <img src={file.preview} className="img-fluid image" style={{ height: '7vh', objectFit: 'cover' }} onLoad={() => { URL.revokeObjectURL(file.preview) }} />
              <div className="middle">
                <FaTrashAlt style={{ cursor: 'pointer' }} color='red' onClick={removeFile(file)} />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="col-4 my-3 position-relative img-person" key={file.name}>
        <div className="row">
          <div className="col-12">
            <video key={file.name} src={file.preview} className="img-fluid image" onLoad={() => { URL.revokeObjectURL(file.preview) }} />
            <div className="middle">
              <FaTrashAlt style={{ cursor: 'pointer' }} color='red' onClick={removeFile(file)} />
            </div>
          </div>
        </div>
      </div>
    )
  })

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [])

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map(e => <li key={e.code}>{e.message}</li>)}
        </ul>

      </li>
    )
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

  return (
    <>
      <div className="row">
        <label htmlFor="category_id">Multimedia</label>
        <div {...getRootProps({ style })}>
          <Field name="files" id='files'>
            {({ _field, form, _meta }) => {
              // console.log(form.values)
              useEffect(() => {
                if (files.length > 0) {
                  form.values.files = files
                } else {
                  // form.values.files = null
                }
              }, [files])

              return (
                <div>
                  <input {...getInputProps()} />
                  {/* <input type="text" placeholder="First Name" /> */}
                  {form.errors.files
                    ? <div className="container text-danger">{form.errors.files}</div>
                    : null}
                </div>
              )
            }}
          </Field>
          {
            isDragActive
              ? <p>Suelta los archivos aquí...</p>
              : element
                ? <>
                  {element}
                </>
                : <>
                  <p>
                    Arrastre y suelte algunos archivos aquí</p>
                  <em>(1 archivo es el número máximo que puede soltar aquí)</em>
                </>

          }
        </div>
        <aside style={thumbsContainer}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              {thumbs}
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
