import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-around container w-[1024px] h-[50px] border-[1px]  mx-auto py-[10px] text-[20px]">
            <div>
                <Link to = "/"><img src = "" alt = "logo"/></Link>
            </div>

            <ul className="flex gap-[50px]">
                <li className="hover:border-b-[2px] border-green-700"><Link to = "/about">O компании</Link></li>
                <li className="hover:border-b-[2px] border-green-700"><Link to = "/clients">Оптовым клиентам</Link></li>
                <li className="hover:border-b-[2px] border-green-700"><Link to = "/station">Розничная АЗС</Link></li>
                <li className="hover:border-b-[2px] border-green-700"><Link to = "/info">Полезная информация</Link></li>
            </ul>
        </div>
    )
}


export default Header;