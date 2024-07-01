import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import {NextUIProvider} from "@nextui-org/system";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router = {routesConfig} />
    </NextUIProvider>
  </React.StrictMode>,
)
