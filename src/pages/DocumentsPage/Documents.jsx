import { getAllDocumentsWithDetails } from '../../utils/fetchData';
import { useEffect } from 'react';
import { useState } from 'react';

import pdfIcon from '../../assets/icons/pdf.svg';
import doc from '../../assets/icons/doc.svg';
import Loading from '../../components/Loading';



const iconByMimeType = (mimetype) => {

    if(mimetype == 'application/pdf')
        return pdfIcon;
    else
        return doc;

}




const Documents = () => {

    const [documents,setDocuments] = useState([]);

    const fetchData = async () => {
        const data = await getAllDocumentsWithDetails();
        setDocuments(data);
    }

    useEffect(() => {
        fetchData();
    },[]);

    console.log(documents)

    if(documents.length == 0)
        return <Loading/>
    

    return (
        <section className="px-[25px] sm:px-[100px] pt-[20px] text-[15px] sm:text-[18px] pb-[90px] min-h-[600px]">
            <h1 className="text-center text-[30px] font-bold">Документы</h1>


            <ul className=' mt-[40px] border-[1px] mx-auto py-[15px] px-[20px] bg-[#fafafa] min-h-[300px]'>
                {documents.map(({guid,title,mime_type}) => 
                    <li className='mt-[2px]' key = {title?.rendered}> 
                        <p>
                            <a className='flex gap-[12px] items-center p-[8px] hover:text-green-700' href = {guid?.rendered} target='_blank'>
                                <img className='h-[20px] w-[20px]' src = {iconByMimeType(mime_type)}/>
                                <span>{title?.rendered}</span>
                        
                            </a> 
                        </p>
                    </li>)}
            </ul>


        </section>
    )
}


export default Documents;