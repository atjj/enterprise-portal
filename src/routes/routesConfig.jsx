import { createBrowserRouter } from 'react-router-dom';

import App from '../App/App';

import Home from '../pages/Home/Home';



export default new createBrowserRouter([
    {   
        element: <App/>,
        errorElement: <div>404 Not Found</div>,
        children: [           
            { 
                path: '/',
                element: <Home/>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/about',
                element: <div>About</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/clients',
                element: <div>Clients</div>,
                errorElement: <div>404 Not Found</div>
            },

            { 
                path: '/info',
                element: <div>Info</div>,
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