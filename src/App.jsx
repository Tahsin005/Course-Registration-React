import './App.css'
import Home from './components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className='font-bold text-3xl'>Course Registration</h1>
      <Home></Home>
    </>
  )
}

export default App
