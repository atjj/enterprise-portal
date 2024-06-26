import docs from './documents.json';


const Documents = () => {
    return (
        <div className="border-[1px] px-[40px] pt-[20px] mt-[15px] text-[18px] pb-[90px]">
            <h1 className="text-center text-[20px] font-bold">Документы</h1>


            <ul >
                {docs.map(({name,icon,href,id}) => 
                    <li className='mt-[20px]' key = {id}> 
                        <a className='flex gap-[7px]' href = {href}>
                            <img className='h-[20px] w-[20px]' src = {icon}/>
                            <span>{name}</span>
                        </a> 
                    </li>)}
            </ul>



        
        </div>
    )
}


export default Documents;