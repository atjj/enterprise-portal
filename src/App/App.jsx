import { Outlet } from 'react-router'
import './App.css'
import Header from '../components/Header'
function App() {

  return (
    <>

      <Header/>
        <div className='container mx-auto w-[1024px] '>
            <Outlet/>
        </div>

    </>
  )
}

export default App
