import LinkBack from "../../components/LinkBack";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { getNewsById } from "../../utils/fetchData";




const NewsComponent = () => {

    const [postById,setPostById] = useState({});
    const {id} = useParams();

    
    useEffect(() => {
        const fetchData = async (id) => {
            const data = await getNewsById(id);
            setPostById(data);

        }

        fetchData(id);
    },[])


    return (
        <section className="px-[20px] pt-[20px] mt-[15px] text-[18px] pb-[90px] min-h-[600px]">

            <div className='max-w-[700px] mx-auto mt-[5px] sm:mt-[30px]'>
                <LinkBack/>
                <h1 className="text-start text-[30px]  max-w-[700px] mx-auto mt-[20px]  font-bold">
                    {postById && postById.title?.rendered}
                </h1>



                <div className = "max-w-[700px] mx-auto mt-[20px]">{postById && postById.date?.substring(0,10)}</div>

                <div className = "mx-auto max-w-[700px] mt-[20px] text-[18px]" dangerouslySetInnerHTML={{__html: postById && postById.content?.rendered}}>

                </div>
            </div>

        </section>
    )
}


export default NewsComponent;