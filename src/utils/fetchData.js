import { instance } from "../api/axios";






export const getNews = async () => {
    const res = await instance.get(`/posts`,{
      headers: {
          'Content-Type': 'application/json',
        },
    });

    return  res.data;
}


export const getNewEmployees = async () => {
    const res = await instance.get(`/new-employees`,{
      headers: {
          'Content-Type': 'application/json',
        },
    });

    return  res.data;
}


const getDocuments = async () => {
    const res = await instance.get(`/documents`,{
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.data;
}


const getMediaById = async (id) => {

    const res = await instance.get(`/media/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(res.data.id && res.data.id == id)
      return res.data;
};


export const getAllDocumentsWithDetails = async () => {
    const documents = await getDocuments();
    const documentDetailsPromises = documents.map(doc => getMediaById(doc.acf.document));
    const documentDetails = await Promise.all(documentDetailsPromises);
    console.log(documentDetails);
    return documentDetails;
};



export const getAllEmployeePhotos = async () => {
    const employees = await getNewEmployees();
    const employeeDetailsPromises = employees.map(emp => getMediaById(emp.acf.employee_photo));
    const employeeDetails = await Promise.all(employeeDetailsPromises);
    return employeeDetails;
};



export const getNewsById = async (id) => {
    const res = await instance.get(`/posts/${id}`,{
      headers: {
          'Content-Type': 'application/json',
        },
    });

    return  res.data;
}




export const getContacts = async (title) => {

    const res = await instance.get(`/${title}`,{
      headers: {
          'Content-Type': 'application/json',
        },
    });

    if(title === 'office-contacts'){
        const contacts = res.data.map(contact => ({
            key: contact.id.toString(),
            position: contact.acf.position,
            fullName: contact.acf.employee_fullname,
            inner_phone_number: contact.acf.internal_phone_number,
            mobile_phone: contact.acf.mobile_phone,
            cabinet: contact.acf.cabinet,
            email: contact.acf.email,
            department: contact.acf.department
        }));

        const groupedContacts = contacts.reduce((acc, contact) => {
            const dept = contact.department;
            if (!acc[dept]) {
                acc[dept] = [];
            }
            acc[dept].push(contact);
            return acc;
        }, []);

        return groupedContacts;

    }
    else if (title === 'station-contacts' || title === 'oil-depot-contacts') {
        return res.data.map(contact => ({
            key: contact.id.toString(),
            id: contact.acf.petrol_station_id || contact.acf.oil_depot_id,
            manager_fullname: contact.acf.manager_fullname,
            manager_mobile_phone: contact.acf.manager_mobile_phone,
            mobile_phone: contact.acf.station_phone || contact.acf.depot_phone,
            email: contact.acf.petrol_station_email || contact.acf.oil_depot_email,
        }));
    } else {
        return;
    }
}



