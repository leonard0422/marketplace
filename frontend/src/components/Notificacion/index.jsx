import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, cssTransition } from 'react-toastify'

// const bounce = cssTransition({
//   enter: 'animate__animated animate__bounceIn',
//   exit: 'animate__animated animate__bounceOut'
// })

export default function Notify () {
  //   const showToastMessage = () => {

  //   }
  //   function animateCss () {
  //     toast.success('Hey 👋, see how easy!', {
  //       transition: bounce,
  //       position: 'top-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined
  //     })
  //   }
  return (
        <>
            <ToastContainer/>
        </>
  )
}
