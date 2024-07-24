import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { columnsOffice } from "../../constants";
import { getOfficeContacts } from "../../utils/fetchData";
import { Suspense, useEffect,useState } from "react";
import SearchInput from "../../components/SearchInput";





const DynamicTable = ({columns,department}) => {
    return (
        <Table aria-label="Example table with dynamic content" className="mt-[10px]" radius = "none">
            <TableHeader columns = {columns}>
                {(column) => <TableColumn  key={column.key} className="text-[16px]">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={department}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
            </TableBody>
        </Table> 
    )
}




const  OfficeContacts = () => {

    const [officeContacts,setOfficeContacts] = useState([]);
    const [searchInput,setSearchInput] = useState('');


    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }

    const fetchData = async () => {
        const data = await getOfficeContacts();
        setOfficeContacts(data);

    }


    const filteredContacts = (department) => {
        return department.filter(item =>
            item.fullName.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.position.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.email.toLowerCase().includes(searchInput.toLowerCase())    ||
            item.department.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    useEffect(()=>{
        fetchData();

    },[]);


    
    const sortedDepartments = Object.keys(officeContacts).sort();
    console.log(searchInput)

    return (
        <section className = "px-[100px] pt-[20px]  min-h-[600px]">
            <h1 
                className = "text-center text-[30px] font-bold"> Контактная информация
            </h1>

            <SearchInput
                searchInput={searchInput}
                handleSearchInput={handleSearchInput}
                />

            <div className = "mt-[20px] mx-auto flex flex-col gap-[50px] pb-[90px]"> 
                    {sortedDepartments.map((department) => {
                    const filteredDepartment = filteredContacts(officeContacts[department]);
                    if (filteredDepartment.length === 0) return null;
                    return   (
                                <div key = {department} >
                                    <h2 className = "text-center text-[20px] font-semibold">{department}</h2>
                                    <Suspense fallback = {<div>Loading...</div>}>
                                        <DynamicTable columns={columnsOffice} department={filteredContacts(officeContacts[department])}/>
                                    </Suspense>
                                </div>
                            )

                    })}
            </div>

        </section>
    )
    }

export default OfficeContacts;




