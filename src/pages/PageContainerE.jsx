

import { Link } from "react-router-dom"
import { X,ChevronLeft,ChevronRight } from "lucide-react"
import Dinamica from "../assets/Pdfs/dinamica_news-3_ED.pdf"
import { useEffect, useState } from "react"
import Scrolltop from "../components/ScrollTop"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
export default function PagecontainerE() {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const {jumpToNextPage,jumpToPreviousPage} = pageNavigationPluginInstance;
    return (
        <>
        <Link to={"/conteudos"}>
            <button className="força fixed top-0  flex ietms-center justify-center gap-2 rounded rounded-l-none  text-white bg-laranja z-10 p-2 duration-300 hover:bg-red-600 hover:w-16">
                <X />
            </button>
        </Link>
            <div className="w-full absolute h-80viewew">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="hidden lg:block h-80viewew">
                    <Viewer fileUrl={Dinamica} 
                    onDocumentLoad={(e)=>{
                        setTotalPages(e.doc.numPages)
                    }}
                    defaultScale={1}
                    onPageChange={(e)=>{
                        setCurrentPage(e.currentPage)
                        
                    }}
                    plugins={[pageNavigationPluginInstance]}
                    />
                </div>
                <div className="block lg:hidden h-80viewew">
                    <Viewer fileUrl={Dinamica} 
                    onDocumentLoad={(e)=>{
                        setTotalPages(e.doc.numPages)
                    }}
                    defaultScale={1}
                    onPageChange={(e)=>{
                        setCurrentPage(e.currentPage)
                        
                    }}
                    plugins={[pageNavigationPluginInstance]}
                    />
                </div>
                </Worker>
            <div className="font-nunitoSans z-10 w-full flex items-center  justify-center">
                <div className="p-4 w-96 bg-slate-900  h-20viewew items-center flex justify-around sm:rounded-t">
                    <button className="bg-laranja text-white p-2 px-10 rounded hover:bg-orange-600 duration-300" 
                    onClick={ ()=>{
                        jumpToPreviousPage()
                        console.log("previus")
                    }}
                    ><ChevronLeft/></button>
                    <p className="text-white text-xl"> {`${currentPage} / ${totalPages}`} </p>
                    <button className="bg-laranja text-white p-2 rounded px-10 hover:bg-orange-600 duration-300"
                    onClick={()=>{
                        jumpToNextPage()
                        console.log("next")
                    }
                    }
                    ><ChevronRight/></button>
                </div>
            </div>
            </div>
        </>

    )
}