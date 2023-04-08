import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Index,{loader as metodosLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        index:true,            //Aqui no se define path porque es la pagina inial
        element: <Index />,
        loader:metodosLoader,
        errorElement: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
