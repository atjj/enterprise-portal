import arrowBack from '../assets/icons/backArrow.png';
import { useNavigate } from 'react-router';

const LinkBack = () => {

    const navigate = useNavigate();
    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return(
        <div>
            <a
                href = 'href'
                className = 'inline-flex items-center text-[18px] gap-[9px]'
                onClick = {handleGoBack}>
                    <img src = {arrowBack} className='w-[20px] h-[20px]' />
                    <span>Назад</span>
            </a>
        </div>
    )
}

export default LinkBack;