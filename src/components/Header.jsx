import { Link, NavLink } from "react-router-dom";
import login from '../assets/icons/login.svg'
import { useEffect } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";



const Header = () => {

    useEffect(() => {
        
        document.body.style.marginTop = '60px'; 
        return () => {
            document.body.style.marginTop = '0';
        };

    }, []);

    return (

        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-around h-[60px] border-b-[1px] py-[10px] text-[20px] w-[1240px] mx-auto">
            <div>
                <NavLink to="/"><img src="" alt="logo" /></NavLink>
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
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                    </DropdownTrigger>
                <DropdownMenu aria-label="profile" variant="flat">
                    <DropdownItem key="profile">
                        <Link to = "/admin">Профиль</Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        <Link to = "/">Выйти</Link>
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>
{/*                 <Link to = "/login">
                     <img src = {login}/>
                </Link> */}
            </button>
            
        </header>
    );
};

export default Header;
