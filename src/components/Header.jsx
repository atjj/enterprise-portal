import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header className="flex justify-between h-[60px] border-b-[1px]   py-[10px] text-[20px]">
            <div>
                <NavLink to = "/"><img src = "" alt = "logo"/></NavLink>
            </div>

            <ul className="flex gap-[25px]">
                <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Главная</NavLink></li>
                <li><NavLink to = "/contacts" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Контакты</NavLink></li>
                <li><NavLink to = "/companyNews" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новости компании</NavLink></li>
                <li><NavLink to = "/documents" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Документы</NavLink></li>
                <li><NavLink to = "/newEmployees" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новые сотрудники</NavLink></li>
                <li><NavLink to = "/station" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>АЗС</NavLink></li> 
                <li><a href = "https://www.bitrix24.ru" className="hover:border-b-[2px] border-green-700" target="_blank">Bitrix24</a></li>               
            </ul>

            <div>
                <p>Войти</p>
            </div>
        </header>
    )
}


export default Header;