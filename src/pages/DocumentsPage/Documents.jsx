import docs from './documents.json';


const Documents = () => {
    return (
        <div className="border-[1px] px-[100px] pt-[20px]  text-[18px] pb-[90px] min-h-[600px]">
            <h1 className="text-center text-[30px] font-bold">Документы</h1>


            <ul className=' mt-[40px]'>
                {docs.map(({name,icon,href,id}) => 
                    <li className='mt-[20px]' key = {id}> 
                        <a className='flex gap-[12px] items-center hover:text-green-700' href = {href}>
                            <img className='h-[20px] w-[20px]' src = {icon}/>
                            <span>{name}</span>
                        </a> 
                    </li>)}
            </ul>


        </div>
    )
}


export default Documents;