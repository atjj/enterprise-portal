import { Outlet } from 'react-router'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function App() {

  return (
    <>

        <div className='flex  flex-col justify-between  min-h-screen container mx-auto w-[1240px]'>
          <Header/>
                <Outlet/>
          <Footer/>
        </div>

    </>
  )
}

export default App
