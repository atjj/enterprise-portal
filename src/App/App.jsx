import { Outlet } from 'react-router'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
function App() {

  return (
    <>

      <Header/>
        <div className='container mx-auto w-[1240px]'>
            <Outlet/>
        </div>
      <Footer/>

    </>
  )
}

export default App
