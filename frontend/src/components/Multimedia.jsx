import { Asset } from '../utils/source'

export default function Multimedia ({ multimedia, data = null }) {
  if (multimedia) {
    return (
            <div className="col-12 d-flex my-3">
                <img style={{ width: '100%', objectFit: 'cover', maxHeight: '30vh' }} src={Asset(data)} alt="" />
            </div>
    )
  }

  return (
        <div className="col-12 d-flex my-3">
            <video style={{ width: '100%', objectFit: 'cover', maxHeight: '30vh' }} src={Asset(data)} alt="" />
        </div>
  )
}
