import { createBrowserRouter } from 'react-router-dom';

import App from '../App/App';

import HomePage from '../pages/HomePage/Home'
import Contacts from '../pages/СontactsPage/Contacts';
import Documents from '../pages/DocumentsPage/Documents';
import NewsPage from '../pages/NewsPage/News'
import NewsComponent from '../pages/NewsPage/NewsComponent';
import NewEmployees from '../pages/NewEmployees/NewEmployees';
import Login from '../pages/LoginPage/Login';
import OfficeContacts from '../pages/СontactsPage/OfficeContacts';


export default new createBrowserRouter([
    {   
        element: <App/>,
        errorElement: <div>404 Not Found</div>,
        children: [                   
            { 
                path: '/',
                element: <HomePage/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/contacts/:title',
                element: <Contacts/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/office-contacts',
                element: <OfficeContacts/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/companyNews',
                element: <NewsPage/>,
                errorElement: <div>404 Not Found</div>,
            },

            { 
                path: '/companyNews/:id',
                element: <NewsComponent/>,
                errorElement: <div>404 Not Found</div>,
            },

            { 
                path: '/documents',
                element: <Documents/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/newEmployees',
                element: <NewEmployees/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/station',
                element: <div>Station</div>,
                errorElement: <div>404 Not Found</div>
            }
        
        ]

    },

    {
        path: '/login',
        element: <Login/>,
        errorElement: <div>404 Not Found</div>
    }

])