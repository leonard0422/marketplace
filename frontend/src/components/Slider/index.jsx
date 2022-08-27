import useSlider from '../../hooks/useSlider'
import Group from './Group'

function Slider () {
  const { sliders } = useSlider()

  // console.log(sliders)
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner">
            {
                sliders.map((item, index) => {
                  return <Group key={index} items={item.sub_sliders} ghoupIndex={index} />
                })
            }
        </div>

        <button className="carousel-control-prev flex-column " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            <h6 className="text-dark">Anterior</h6>
        </button>

        <button className="carousel-control-next flex-column " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            <h6 className="text-dark">Siguiente</h6>
        </button>
    </div>
  )
}

export default Slider
