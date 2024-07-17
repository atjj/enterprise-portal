import { Link, NavLink } from "react-router-dom";
/* import login from '../assets/icons/login.svg'; */
import mainlogo from '../assets/icons/mainlogo.png';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem,Image} from "@nextui-org/react";
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

/*     const [isOpen, setIsOpen] = useState(false);
 */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      {
        id: "home",
        title:"Главная",
        href: "/"
      },
      {
        id: "contacts",
        title: "Контакты",
        childrens: [
            {
                id: "office",
                title: "Офис",
                href: "/contacts/office-contacts"
            },
            {
                id: "stations",
                title: "АЗС",
                href: "/contacts/station-contacts"
            },
            {
                id: "oildepots",
                title: "Нефтебаза",
                href: "/contacts/oil-depot-contacts"
            },
        ] 
      },
      {
        id: "companyNews",
        title:"Новости компании",
        href: "/companyNews"

      },
      {
        id: "documents",
        title: "Документы",
        href: "/documents"

      },
      {
        id: "newEmployees",
        title: "Новые сотрудники",
        href: "/newEmployees"

      },
      
      {
        id: "stations",
        title: "АЗС",
        href: "/station"
      },
      {
        id: "bitrix",
        title: "Bitrix24",
        href: "https://www.bitrix24.ru"
      }
    ];



    return (

        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-between items-center h-[60px] border-b-[1px] py-[10px] w-full px-4 md:px-8 md:justify-around  lg:px-0 lg:w-[1240px]   mx-auto">


            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}

                >
                <NavbarContent className="md:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent  justify="center">
                    <NavbarBrand>
                        <Image
                            src = {mainlogo}
                            width = {100}

                        />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-[6px]" justify = "center">
                    <NavbarBrand>
                        <Image
                            src= {mainlogo}
                            width={60}
                            />        
                    </NavbarBrand>

                    {menuItems.map((item,index) => {
                        return (
                            <NavbarItem key = {index}>

                                {item.title == "Контакты" ? (
                                    <Dropdown className="rounded-none">
                                        <DropdownTrigger className="cursor-pointer hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out text-[20px]">
                                                {item.title}
                                        </DropdownTrigger>
                                            <DropdownMenu aria-label="Actions">
                                                {item.childrens.map(({id,title,href}) => <DropdownItem key={id} textValue = {title}><NavLink to = {href} className = "text-[16px] hover:text-green-700">{title}</NavLink></DropdownItem>)}
                                            </DropdownMenu>
                                    </Dropdown>
                                ) : (<NavLink to = {item.href} className = {({ isActive }) => `${isActive ? 'bg-gray-100 text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out' : 'hover:bg-gray-100 hover:text-green-700 rounded-full px-3 py-1 transition-all duration-300 ease-in-out'} text-[20px]`}>{item.title}</NavLink>)}
                            </NavbarItem>
                        )
                    })}
                </NavbarContent>



                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.title}-${index}`}>
                            <Link
                                className = "w-full"
                                color = "foreground"
                                to = {item.href}
                                size = "lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                </Navbar>

            
        </header>
    );
};

export default Header;




{/*             <div className="w-[80px]">
                <NavLink to="/"><img src={mainlogo} alt="logo" /></NavLink>
            </div>

            <button className="inline-block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>

            <ul className={`fixed p-[10px] md:relative top-[60px] md:top-[0px] left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none md:flex gap-[25px] items-center transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full md:translate-x-0'}`}>
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
            </ul> */}

            
{/*             <button className="w-[30px] h-[30px]">
                <Link to = "/login">
                     <img src = {login}/>
                </Link>
            </button> */}