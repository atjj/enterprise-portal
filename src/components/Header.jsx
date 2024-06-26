import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-around container w-[1240px] h-[50px] border-[1px]  mx-auto py-[10px] text-[20px]">
            <div>
                <NavLink to = "/"><img src = "" alt = "logo"/></NavLink>
            </div>

            <ul className="flex gap-[40px]">
                <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Главная</NavLink></li>
                <li><NavLink to = "/contacts" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Контакты</NavLink></li>
                <li><NavLink to = "/bitrix24" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Bitrix24</NavLink></li>
                <li><NavLink to = "/companyNews" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новости компании</NavLink></li>
                <li><NavLink to = "/documents" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Документы</NavLink></li>
                <li><NavLink to = "/newEmployees" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>Новые сотрудники</NavLink></li>
                <li><NavLink to = "/station" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>АЗС</NavLink></li>                
            </ul>
        </div>
    )
}


export default Header;