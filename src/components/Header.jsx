import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        // Add margin to the body element to prevent content from being overlapped by the fixed header
        document.body.style.marginTop = '60px'; // Adjust this value to match the header height
        return () => {
            // Clean up the margin when the component unmounts
            document.body.style.marginTop = '0';
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-between h-[60px] border-b-[1px] py-[10px] text-[20px]">
            <div>
                <NavLink to="/"><img src="" alt="logo" /></NavLink>
            </div>

            <ul className="flex gap-[25px]">
                <li>
                    <NavLink to="/" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        Контакты
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/companyNews" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        Новости компании
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        Документы
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newEmployees" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        Новые сотрудники
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/station" className={({ isActive }) => `${isActive ? 'border-b-[2px] border-green-700 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out border-b-[2px] border-transparent'}`}>
                        АЗС
                    </NavLink>
                </li>
                <li>
                    <a href="https://www.bitrix24.ru" className="hover:border-b-[2px] border-green-700" target="_blank" rel="noopener noreferrer">
                        Bitrix24
                    </a>
                </li>
            </ul>

            <div>
                <p>Войти</p>
            </div>
        </header>
    );
};

export default Header;
