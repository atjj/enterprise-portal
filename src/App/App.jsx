import { Outlet } from 'react-router'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
function App() {

  return (
    <>

        <div className='container mx-auto w-[1240px]'>
        <Header/>
            <Outlet/>
        <Footer/>
        </div>
      

    </>
  )
}

export default App
