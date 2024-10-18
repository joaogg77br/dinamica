import { Link } from "react-router-dom"
import { X } from "lucide-react"
import Dinamica from "../assets/Pdfs/Dinâmica News - 2ª edição.pdf"
import { useEffect, useState } from "react"
import Scrolltop from "../components/ScrollTop"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
export default function PagecontainerA() {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const {jumpToNextPage,jumpToPreviousPage} = pageNavigationPluginInstance;
    return (
        <>
            <button className="fixed top-0  rounded rounded-l-none flex  text-white  justify-center bg-laranja z-10 p-2 duration-300 hover:bg-orange-600 hover:pr-5">
                <X />
            </button>
            <div className="w-full absolute h-80viewew">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={Dinamica} className="" 
                    onDocumentLoad={(e)=>{
                        setTotalPages(e.doc.numPages)
                    }}
                    onPageChange={(e)=>{
                        setCurrentPage(e.currentPage)
                        
                    }}
                    plugins={[pageNavigationPluginInstance]}
                    />
                </Worker>
            <div className="font-nunitoSans z-10 w-full flex items-center  justify-center">
                <div className="p-4 w-96 bg-slate-900  h-20viewew items-center flex justify-around">
                    <button className="bg-laranja text-white p-2 px-10 rounded"
                    onClick={ ()=>{
                        jumpToPreviousPage()
                        console.log("previus")
                    }}
                    >Prev</button>
                    <p className="text-white text-xl"> {`${currentPage} / ${totalPages}`} </p>
                    <button className="bg-laranja text-white p-2 rounded px-10"
                    onClick={()=>{
                        jumpToNextPage()
                        console.log("next")
                    }
                    }
                    >Next</button>
                </div>
            </div>
            </div>
        </>

    )
}