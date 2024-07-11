import './App.css'
import Home from './components/Home/Home'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
      <ToastContainer />
      <h1 className='font-bold text-3xl'>Course Registration</h1>
      <Home></Home>
    </>
  )
}

export default App
