import { Link, NavLink } from "react-router-dom";
import login from '../assets/icons/login.svg';
import mainlogo from '../assets/icons/mainlogo.png';
import { useEffect,useState} from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/react";


const Header = () => {

    useEffect(() => {
        
        document.body.style.marginTop = '60px'; 
        return () => {
            document.body.style.marginTop = '0';
        };

    }, []);

    const [isOpen, setIsOpen] = useState(false);




    return (

        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-around items-center h-[60px] border-b-[1px] py-[10px] text-[20px] w-[1240px] mx-auto">
            <div className="w-[80px]">
                <NavLink to="/"><img src={mainlogo} alt="logo" /></NavLink>
            </div>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>

            <ul  className={`lg:flex gap-[25px] items-center ${isOpen ? 'block' : 'hidden'}`}>
                <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'}`}>Главная</NavLink></li>
                <li>
                    <Dropdown className="rounded-none ">
                        <DropdownTrigger className="cursor-pointer hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out">
                                Контакты
                        </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="office" textValue = "Офис"><NavLink to = '/contacts/office-contacts' className = "hover:text-green-700">Офис</NavLink></DropdownItem>
                                <DropdownItem key="stations" textValue = "АЗС"><NavLink to = '/contacts/station-contacts' className = "hover:text-green-700" >АЗС</NavLink></DropdownItem>
                                <DropdownItem key="oildepots" textValue = "Нефтебаза"><NavLink to = '/contacts/oil-depot-contacts' className = "hover:text-green-700">Нефтебаза</NavLink></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>                
                <li><NavLink to = "/companyNews" className={({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'}`}>Новости компании</NavLink></li>
                <li><NavLink to = "/documents" className={({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'}`}>Документы</NavLink></li>
                <li><NavLink to = "/newEmployees" className={({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'}`}>Новые сотрудники</NavLink></li>
                <li><NavLink to = "/station" className={({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'}`}>АЗС</NavLink></li> 
                <li><a href = "https://www.bitrix24.ru" className = "hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out" target="_blank">Bitrix24</a></li>               
            </ul>

            
            <button className="w-[30px] h-[30px]">
                <Link to = "/login">
                     <img src = {login}/>
                </Link>
            </button>
            
        </header>
    );
};

export default Header;
