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


    if(title == 'office-contacts'){

        return res.data.map(contact => ({
                key: contact.id.toString(),
                position: contact.acf.position,
                fullName: contact.acf.employee_fullname,
                inner_phone_number: contact.acf.internal_phone_number,
                mobile_phone: contact.acf.mobile_phone,
                cabinet: contact.acf.cabinet,
                email: contact.acf.email
        }));

    } else if (title == 'station-contacts'){

        return res.data.map(contact => ({
            key: contact.id.toString(),
            station_id: contact.acf.petrol_station_id,
            manager_fullname: contact.acf.manager_fullname,
            mobile_phone: contact.acf.mobile_phone,
            station_email: contact.acf.petrol_station_email,
        }));

    } else if (title == 'oil-depot-contacts') {

        return res.data.map(contact => ({
            key: contact.id.toString(),
            depot_id: contact.acf.oil_depot_id,
            manager_fullname: contact.acf.manager_fullname,
            mobile_phone: contact.acf.mobile_phone,
            depot_email: contact.acf.oil_depot_email,
        }));

    }
    else {
        return  res.data;
    }

}



