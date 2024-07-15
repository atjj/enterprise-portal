import {Card,CardBody,Image} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import unknownImage from '../../assets/Unknown.jpg'

import {Accordion, AccordionItem} from "@nextui-org/react";

const NewEmployees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/wordpress/wp-json/wp/v2/new-employees').then(res => { setEmployees(res.data)});
    },[])


    console.log(employees)
    return (
        <section className="border-[1px] px-[100px] pt-[20px] mt-[15px] min-h-[600px] text-center pb-[90px]">

            <h1 className="text-3xl font-bold text-green-700">Добро пожаловать, новые сотрудники!</h1>

            <p className="text-lg text-gray-600 mt-4">
                Мы рады представить вам наших новых коллег. Узнайте о них больше ниже.
            </p>

            <div className="mt-[25px] flex gap-[26px] flex-wrap">

                {employees.map((employee) => 
                        <Card key={employee.id} className="w-[100%] rounded-none">
                            <CardBody>
                                <div className="flex gap-[70px]">
                                    <Image
                                        alt = "employee_image"
                                        className = "object-cover rounded-none"
                                        src = {unknownImage}
                                        width = {180}
                                    />
                                    
                                    <div className="py-[22px] w-[700px]">
                                        <ul className="text-[20px]">
                                            <li className="mt-[5px]">
                                                <span className="font-bold mr-[10px]">Ф.И.О:</span>
                                                    {`${employee.acf.name} ${employee.acf.lastname} ${employee.acf.patronym}`}
                                            </li>
                                            <li className="mt-[5px]">
                                                <span className="font-bold mr-[10px]">Эл.почта:</span> 
                                                    {employee.acf.email}
                                            </li>
                                            <li className="mt-[5px]">
                                                <span className="font-bold mr-[10px]">Отдел:</span>  
                                                {employee.acf.department}
                                            </li>
                                            <li className="mt-[5px]">
                                                <span className="font-bold mr-[10px]">Должность:</span>
                                                 {employee.acf.position}
                                            </li>
                                        </ul>

                                        <div className="mt-[20px]">
                                            <Accordion className="p-[0px]">
                                                <AccordionItem key="1" aria-label="Accordion 1" title="Описание:" className="text-[18px] p-[2px] w-[100%]"
                                                >
                                                    {employee.acf.description}
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>
                    
                )}

            </div>


        </section>
    );
};

export default NewEmployees; 