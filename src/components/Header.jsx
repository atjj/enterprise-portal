import { Link, NavLink } from "react-router-dom";
import login from '../assets/icons/login.svg'
/* import mainLogo from '../assets/icons/MainLogo.svg' */
const Header = () => {
    return (
        <header className="flex justify-between items-center  h-[60px] border-b-[1px]   py-[10px] text-[20px]">
            <div className=" flex items-center">
                <NavLink to = "/"><img src = {""}  alt = "logo"/></NavLink>
            </div>

            <ul className="flex gap-[25px]">
                <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Главная</NavLink></li>
                <li><NavLink to = "/contacts" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Контакты</NavLink></li>
                <li><NavLink to = "/companyNews" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новости компании</NavLink></li>
                <li><NavLink to = "/documents" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Документы</NavLink></li>
                <li><NavLink to = "/newEmployees" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новые сотрудники</NavLink></li>
                <li><NavLink to = "/station" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-[var(--color-pantone363C)] transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>АЗС</NavLink></li> 
                <li><a href = "https://www.bitrix24.ru" className="hover:border-b-[2px] border-green-700" target="_blank">Bitrix24</a></li>               
            </ul>

            
            <button className="w-[30px] h-[30px]">
                <Link to = "/login">
                     <img src = {login}/>
                </Link>
            </button>
            
        </header>
    )
}


export default Header;