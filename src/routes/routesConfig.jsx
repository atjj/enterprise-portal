import { createBrowserRouter } from 'react-router-dom';

import App from '../App/App';

import HomePage from '../pages/HomePage/Home'


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
                path: '/contacts',
                element: <div>contacts</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/bitrix24',
                element: <div>Bitrix24</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/companyNews',
                element: <div>CompanyNews</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/documents',
                element: <div>documents</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/newEmployees',
                element: <div>newEmployees</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/station',
                element: <div>Station</div>,
                errorElement: <div>404 Not Found</div>
            },


            
        ]

    },


])