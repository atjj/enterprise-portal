import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

  const columnsStation = [
    {
        key: "station_id",
        label: "Номер АЗС"
    },
    {
        key: "manager_fullname",
        label: "Ф.И.О управляемого"
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон"
    },
    {
        key: "station_email",
        label: "Почта АЗС"
    }
  ]

  const columnsOildepot = [
    {
        key: "depot_id",
        label: "Номер Нефтебазы"
    },
    {
        key: "manager_fullname",
        label: "Ф.И.О управляемого"
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон"
    },
    {
        key: "depot_email",
        label: "Почта Нефтебазы"
    }
  ]

  const columnsOffice = [
    {
      key: "position",
      label: "Должность",
    },
    {
      key: "fullName",
      label: "Ф.И.О сотрудника",
    },
    {
      key: "inner_phone_number",
      label: "Внутренний телефон",
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон",
      },
      {
        key: "cabinet",
        label: "Кабинет",
      },
      {
        key: "email",
        label: "Почта",
      },

  ];


const Contacts = () => {

    const {title} = useParams();
    const [contacts,setContacts] = useState([]);
    const [columns,setColumns] = useState([{key: "",label: ""}]);
    
    useEffect(() => {
        axios.get(`http://localhost/wordpress/wp-json/wp/v2/${title}`)
                    .then(res => { 
                        if(title == 'office-contacts') {
                            const formattedContacts = res.data.map(contact => ({
                                key: contact.id.toString(),
                                position: contact.acf.position,
                                fullName: contact.acf.employee_fullname,
                                inner_phone_number: contact.acf.internal_phone_number,
                                mobile_phone: contact.acf.mobile_phone,
                                cabinet: contact.acf.cabinet,
                                email: contact.acf.email
                            }));

                            setContacts(formattedContacts);
                            setColumns(columnsOffice);

                        } else if(title == 'station-contacts') {

                            const formattedContacts = res.data.map(contact => ({
                                key: contact.id.toString(),
                                station_id: contact.acf.petrol_station_id,
                                manager_fullname: contact.acf.manager_fullname,
                                mobile_phone: contact.acf.mobile_phone,
                                station_email: contact.acf.petrol_station_email,
                            }));

                            setContacts(formattedContacts);
                            setColumns(columnsStation);

                        } else if(title == 'oil-depot-contacts') {

                            const formattedContacts = res.data.map(contact => ({
                                key: contact.id.toString(),
                                depot_id: contact.acf.oil_depot_id,
                                manager_fullname: contact.acf.manager_fullname,
                                mobile_phone: contact.acf.mobile_phone,
                                depot_email: contact.acf.oil_depot_email,
                            }));

                            setContacts(formattedContacts);
                            setColumns(columnsOildepot);
                        }
                    });
    
    },[title])

    console.log(contacts);


    return (
        <section className="border-[1px] px-[100px] pt-[20px]  min-h-[600px]">
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












{/*                 <div className="flex flex-col gap-[20px]">
                    <h2 className="font-bold">Юридический адрес и адрес офиса компании:</h2>
                    <p className="text-start w-[500px]">
                        Общество с ограниченной ответственностью &quot;ШНОС&quot;
                        Кыргызская республика, г. Бишкек
                        720040, ул. Исанова 1/5
                    </p>
                    <ul>
                        <li>тел: +996 (312) 303 303</li> 
                        <li>факс: +996 (312) 303 360</li>
                    </ul>

                    
                    <h2 className="font-bold"> По вопросам касающихся конкурсных торгов и государственных закупок: </h2>
                    <ul>
                        <li>тел: +996 (312) 303 303, (доб. 138)</li>
                        <li>тел: +996 (556) 706 146</li>
                        <li>тел: +996 (700) 706 146</li>
                        <li>эл.адрес: tender@bpetroleum.kg</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <h2 className="font-bold">Отдел кадров</h2>
                    <ul>
                        <li>тел: +996 312 303 303, (доб. 131);</li>
                        <li>эл.адрес: hr@bpetroleum.kg</li>
                    </ul>

                    <h2 className="font-bold">Отдел маркетинга и рекламы</h2>
                    <ul>
                        <li>тел: +996 312 303 303, (доб. 124);</li>
                        <li>эл.адрес: marketing@bpetroleum.kg</li>
                    </ul>

                    <h2 className="font-bold">Номер горячей линии:</h2>
                    <ul>
                        <li>тел: +996 (557) 29 49 49 (номер круглосуточный)</li>
                    </ul>
                </div> */}
