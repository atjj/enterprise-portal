import { useEffect, useState } from "react";

import { useParams } from "react-router";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { getContacts } from "../../utils/fetchData";

import {columnsOildepot,columnsStation } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";




const Contacts = () => {

    const {title} = useParams();
    const [contacts,setContacts] = useState([]);
    const [columns,setColumns] = useState([{key: "",label: ""}]);
    const [searchInput,setSearchInput] = useState('');


    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }

    const fetchData = async (title) => {
        const data = await getContacts(title);
        setContacts(data);

    }
    
    useEffect(() => {
        if (title == 'station-contacts')
            setColumns(columnsStation)
        else if (title == 'oil-depot-contacts')
            setColumns(columnsOildepot)
        else
            setColumns([{key: "",label: ""}]);

        fetchData(title);
    
    },[title])

    console.log(contacts)


    const filteredContacts = (contacts) => {
        return contacts.filter(item =>
            item.id.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.manager_fullname.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.manager_mobile_phone.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.mobile_phone.toLowerCase().includes(searchInput.toLowerCase())    ||
            item.email.toLowerCase().includes(searchInput.toLowerCase())
        );
    };


    if(contacts.length === 0)
        return <Loading/>

    return (
        <section className="px-[100px] pt-[20px]  min-h-[600px]">
            <h1 
                className="text-center text-[30px] font-bold">{"Контактная информация"}
            </h1>
            
            <SearchInput 
                searchInput={searchInput}
                handleSearchInput={handleSearchInput}
            />

            <div className="text-[18px] mt-[20px] mx-auto flex gap-[60px] pb-[90px]"> 
                <Table aria-label="Example table with dynamic content" radius = "none">
                    <TableHeader columns = {columns}>
                        {(column) => <TableColumn  key={column.key} className="text-[16px]">{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={filteredContacts(contacts)}>
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