import { useEffect, useState } from 'react'
import SliderService from '../services/SliderService'

export default function useSlider () {
  const [sliders, setSliders] = useState([])

  useEffect(() => {
    SliderService.List().then(setSliders).catch(console.error)
  }, [])

  return { sliders }
}
