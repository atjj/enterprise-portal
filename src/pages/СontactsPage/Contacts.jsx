import { useEffect, useState } from "react";

import { useParams } from "react-router";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { getContacts } from "../../utils/fetchData";


import { columnsOffice,columnsOildepot,columnsStation } from "../../constants";



const Contacts = () => {

    const {title} = useParams();
    const [contacts,setContacts] = useState([]);
    const [columns,setColumns] = useState([{key: "",label: ""}]);
    
    useEffect(() => {

        const fetchData = async (title) => {
            const data = await getContacts(title);
            setContacts(data);

        }

        if(title == 'office-contacts')
            setColumns(columnsOffice)
        else if (title == 'station-contacts')
            setColumns(columnsStation)
        else if (title == 'oil-depot-contacts')
            setColumns(columnsOildepot)
        else
            setColumns([{key: "",label: ""}]);


        fetchData(title);
    
    },[title])



    return (
        <section className="px-[100px] pt-[20px]  min-h-[600px]">
            <h1 
                className="text-center text-[30px] font-bold">{"Контактная информация"}
            </h1>

            <div className="text-[18px] mt-[40px] mx-auto flex gap-[60px] pb-[90px]">

                    
                <Table aria-label="Example table with dynamic content" radius = "none">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn  key={column.key} className="text-[16px]">{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={contacts}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>

    </section>

    )

}

export default Contacts;