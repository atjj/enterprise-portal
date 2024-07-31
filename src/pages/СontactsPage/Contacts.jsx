import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getContacts } from "../../utils/fetchData";

import {columnsOildepot,columnsStation } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import DynamicTable from "../../components/DynamicTable";




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
                <DynamicTable columns = {columns} rows = {filteredContacts(contacts)}/>          
            </div>

        </section>

    )

}

export default Contacts;