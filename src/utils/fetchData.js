import { instance } from "../api/axios";
import { POSTS,NEW_EMPLOYEES,DOCUMENTS,MEDIA } from "../constants";





export const getNews = async () => {
    try {
        const res = await instance.get(POSTS, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; 
      }
}


export const getNewEmployees = async () => {
    try {
      const res = await instance.get(NEW_EMPLOYEES, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching new employees:', error);
      throw error;
    }
  };
  
  const getDocuments = async () => {
    try {
      const res = await instance.get(DOCUMENTS, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching documents:', error);
      throw error;
    }
  };
  
  const getMediaById = async (id) => {
    try {
      const res = await instance.get(`${MEDIA}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.data.id && res.data.id === id) {
        return res.data;
      }
      throw new Error(`Media with ID ${id} not found`);
    } catch (error) {
      console.error(`Error fetching media by ID ${id}:`, error);
      throw error;
    }
  };
  
  export const getAllDocumentsWithDetails = async () => {
    try {
      const documents = await getDocuments();
      const documentDetailsPromises = documents.map((doc) => getMediaById(doc.acf.document));
      const documentDetails = await Promise.all(documentDetailsPromises);
      return documentDetails;
    } catch (error) {
      console.error('Error fetching all documents with details:', error);
      throw error;
    }
  };
  
  export const getAllEmployeePhotos = async () => {
    try {
      const employees = await getNewEmployees();
      const employeeDetailsPromises = employees.map((emp) => getMediaById(emp.acf.employee_photo));
      const employeeDetails = await Promise.all(employeeDetailsPromises);
      return employeeDetails;
    } catch (error) {
      console.error('Error fetching all employee photos:', error);
      throw error;
    }
  };
  
  export const getNewsById = async (id) => {
    try {
      const res = await instance.get(`/${POSTS}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      console.error(`Error fetching news by ID ${id}:`, error);
      throw error;
    }
  };
  
  export const getContacts = async (title) => {
    try {
      const res = await instance.get(`/${title}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (title === 'office-contacts') {
        const contacts = res.data.map((contact) => ({
          key: contact.id.toString(),
          position: contact.acf.position,
          fullName: contact.acf.employee_fullname,
          inner_phone_number: contact.acf.internal_phone_number,
          mobile_phone: contact.acf.mobile_phone,
          cabinet: contact.acf.cabinet,
          email: contact.acf.email,
          department: contact.acf.department,
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
      } else if (title === 'station-contacts' || title === 'oil-depot-contacts') {
        return res.data.map((contact) => ({
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
    } catch (error) {
      console.error(`Error fetching contacts with title ${title}:`, error);
      throw error;
    }
  };