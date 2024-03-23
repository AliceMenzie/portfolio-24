import { useState } from 'react'
import '../../App.css'
const Circle = () => {
  const [animate, setAnimate] = useState(false)

  const toggleAnimation = () => {
    setAnimate((prevState) => !prevState)
  }

  return (
    <div className="flex place-content-center gap-3">
 
   
    </div>
  )
}

export default Circle
