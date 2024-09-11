import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Notices from './pages/Notices.jsx'
import Dinamica from './pages/dinamica.jsx'
import Mvv from './pages/Mvv.jsx'
import Atividades from './pages/Atividades.jsx'
import Beneficios from './pages/Beneficios.jsx'
import Atuacao from './pages/Atucao.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/noticias",
    element:<Notices/>
    
  },
  {
    path:"/dinamica",
    element:<Dinamica/>
  },
  {
    path:"/mvv",
    element:<Mvv/>
  },
  {
    path:"/atividades",
    element:<Atividades/>
  },
  {
    path:"/beneficios",
    element:<Beneficios/>
  },
  {
    path:"/area de atuacao",
    element:<Atuacao/>
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
