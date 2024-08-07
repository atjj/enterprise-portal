import {Card,CardBody} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNews } from "../../utils/fetchData";
import Loading from '../../components/Loading';
const News = () => {

    const [posts,setPosts] = useState([]);


    const fetchData = async () => {

        const data = await getNews();
        setPosts(data);

    }


    useEffect(() => {
        fetchData();
    },[])

    if(posts.length === 0)
        return <Loading/>

    return (
        <section className="px-[25px] sm:px-[100px] sm:pt-[20px] mt-[15px] sm:text-[18px] pb-[90px] min-h-[600px]">
            <h1 className="text-center text-[30px] font-bold">Новости компании</h1>
            <div className="mt-[40px] flex flex-col gap-[20px] sm:flex-wrap sm:justify-between sm:gap-y-[30px] sm:flex-row">
                {posts.map((post) => {
                    return(
                        <Link key = {post.id} to = {`/companyNews/${post.id}`}>
                                <Card className="w-full sm:w-[470px] rounded-none">
                                    <CardBody>
                                        <p className="font-bold text-start m-[16px]">
                                            {post.title?.rendered}
                                        </p>

                                        <p className="m-[16px] text-gray-500">{post.date?.substring(0,10)}</p>
                                    </CardBody>
                                </Card>
                        </Link>
                    )
                })}
            </div>




        </section>
    )
}



export default News;