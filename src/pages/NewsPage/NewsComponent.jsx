import LinkBack from "../../components/LinkBack";
import axios from "axios";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
const NewsComponent = () => {

    const [postById,setPostById] = useState({});
    const {id} = useParams();

    
    useEffect(() => {
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`).then(res => { setPostById(res.data)});    
    },[])


    console.log("postById:",postById)

    return (
        <section className="border-[1px] px-[20px] pt-[20px] mt-[15px] text-[18px] pb-[90px] min-h-[600px]">



            <div className='max-w-[700px] mx-auto mt-[30px]'>
            <LinkBack/>
            <h1 className="text-start text-[30px]  max-w-[700px] mx-auto mt-[20px]  font-bold">
                {postById && postById.title?.rendered}
            </h1>



            <div className="max-w-[700px] mx-auto mt-[20px]">{postById && postById.date?.substring(0,10)}</div>

            <div className = "mx-auto max-w-[700px] mt-[20px] text-[18px]" dangerouslySetInnerHTML={{__html: postById && postById.content?.rendered}}>

            </div>
            </div>

        </section>
    )
}


export default NewsComponent;