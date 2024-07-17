import docs from './documents.json';


const Documents = () => {
    return (
        <section className="px-[25px] sm:px-[100px] pt-[20px] text-[15px] sm:text-[18px] pb-[90px] min-h-[600px]">
            <h1 className="text-center text-[30px] font-bold">Документы</h1>


            <ul className=' mt-[40px] border-[1px] mx-auto py-[15px] px-[20px] bg-[#fafafa]'>
                {docs.map(({name,icon,href,id}) => 
                    <li className='mt-[5px]' key = {id}> 
                        <p>
                            <a className='flex gap-[12px] items-center p-[10px] hover:text-green-700' href = {href}>
                                <img className='h-[20px] w-[20px]' src = {icon}/>
                                <span>{name}</span>
                            </a> 
                        </p>
                    </li>)}
            </ul>


        </section>
    )
}


export default Documents;