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
import Conselhos from './pages/Conselhos.jsx'
import Cooperativismo from './pages/Cooperativismo.jsx'
import Principios from './pages/Principios.jsx'
import Conteudos from './pages/Conteudos.jsx'
import Details from './pages/Details.jsx'
import FaleConosco from './pages/Faleconosco.jsx'
import Educacao from './pages/Educação.jsx'
import PageNoticesA from './pages/PageNoticesA.jsx'
import PageNoticesn from './pages/PageNoticesn.jsx'
import PageNotice from './pages/PageNotice.jsx'
import PageContainerA from './pages/PagecontainerA.jsx'
import PagecontainerB from './pages/PageContainerB.jsx'
import PagecontainerC from './pages/PageContainerC.jsx'
import PagecontainerD from './pages/PageContainerD.jsx'
import PagecontainerE from './pages/PageContainerE.jsx'
import { NumberPhoneVProvider } from './Context/NumberPhoneV.jsx'

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
  },
  {
    path:"/conselhos",
    element:<Conselhos/>
  },
  {
    path:"/Cooperativismo",
    element:<Cooperativismo/>
  },
  {
    path:"/principios",
    element:<Principios/>
  },
  {
    path:"/educação continuada",
    element:<Principios/>
  },
  {
    path:"/conteudos",
    element:<Conteudos/>
  },
  {
    path:"/noticias/details/:id",
    element:<Details/>
  },
  {
    path:"/fale conosco",
    element:<FaleConosco/>
  },
  {
    path:"/Educacao continuada",
    element:<Educacao/>
  },
  {
    path:"/notices/outubro_rosa",
    element:<PageNoticesA/>
  },
  {
    path:"/notices/cooperados",
    element:<PageNoticesn/>
  },
  {
    path:"/notices/cooperativa",
    element:<PageNotice/>
  },
  {
    path:"/conteudos/pdfs",
    element:<PageContainerA/>
  },
  {
    path:"/conteudos/pdfs/1",
    element:<PagecontainerB/>
  },
  {
    path:"/conteudos/pdfs/2",
    element:<PagecontainerC/>
  },
  {
    path:"/conteudos/pdfs/3",
    element:<PagecontainerD/>
  },
  {
    path:"/conteudos/pdfs/4",
    element:<PagecontainerD/>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NumberPhoneVProvider>
    <RouterProvider router={router} />
    </NumberPhoneVProvider>
  </StrictMode>
)
