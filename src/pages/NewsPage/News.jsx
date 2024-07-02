import {Card,CardBody,CardHeader,Image} from "@nextui-org/react";
import newsList from './news.json';
import { Link } from "react-router-dom";

const News = () => {
    return(
        <div className="border-[1px] px-[100px] pt-[20px] mt-[15px] text-[18px] pb-[90px] min-h-[600px]">
            <h1 className="text-center text-[30px] font-bold">Новости компании</h1>
            <div className="mt-[40px] flex flex-wrap justify-between gap-y-[30px] ">
                {newsList.map(({id,image,title}) => 
                    <Link key = {id} to = {`/companyNews/${id}`}>
                        <Card key = {id} className="w-[470px]">
                            <CardHeader>
                                <Image
                                    width = "100%"
                                    className = "z-0 w-full h-full object-cover"
                                    alt = "company news"
                                    src = {image}
                                    />
                            </CardHeader>
                            <CardBody>
                                <p className="font-bold text-start m-[16px]">
                                    {title}
                                </p>

                                <p className="m-[16px] text-gray-500">28.06.2024</p>
                            </CardBody>
                        </Card>
                    </Link>
                )}

            </div>




        </div>
    )
}



export default News;