import { Asset } from '../../utils/source'

export default function GroupItem ({ name, index, url_image, video = null }) {
  const renderVideo = (src) => (
    <div className="w-100 h-vh-100">
        <video className="w-100" style={{ height: '100%', objectFit: 'cover' }} muted loop>
            <source src={Asset(src)} type="video/webm"/>
        </video>
    </div>
  )

  const renderImage = (src) => (
        <a className="w-100 max-w-70" href="#"><img className="d-block w-100" src={Asset(src)} alt="First slide"/></a>
  )

  return (
    <div id={name + index} className="row justify-content-center mandatory-scroll-aling h-vh-100">
        <div className="col-12 p-0 d-flex justify-content-center align-items-center alt-max">
            { video ? renderVideo(video) : renderImage(url_image) }
        </div>
    </div>
  )
}
