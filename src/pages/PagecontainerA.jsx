import { Link } from "react-router-dom"
import { X } from "lucide-react"
import Dinamica from "../assets/Pdfs/Dinâmica News - 2ª edição.pdf"
import PdfObject from "pdfobject"
import { useEffect } from "react"
export default function PagecontainerA() {
    useEffect(()=>{
        PdfObject.embed(Dinamica,"#pdf-viewer");
    },[])
    return (
           
                <div className="w-full h-screen text-white top-2 left-0 z-50 ">
                    <Link to="/conteudos" className="text-white">
                    <button className="position rounded absolute bg-laranja p-2"><X/></button>
                    </Link>
                    <div id="pdf-viewer" style={{ width: '100%', height: '100vh' }}></div>
                </div>
        )
    }