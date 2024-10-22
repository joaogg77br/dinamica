import { Link } from "react-router-dom"
import { X, ChevronUp, ChevronDown, ZoomIn, ZoomOut, Expand, FileDown, Printer } from "lucide-react"
import Dinamica from "../assets/Pdfs/dinamica_news-1_ED.pdf"
import { useEffect, useState } from "react"
import Scrolltop from "../components/ScrollTop"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

export default function PagecontainerA() {
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [disebleButtonEnd, setDisebleButtonEnd] = useState(false)
    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    const fullScreenPluginInstance = fullScreenPlugin()
    const pageNavigationPluginInstance = pageNavigationPlugin();
    

    return (
        <>
            <Link to={"/conteudos"}>
                <button className="força fixed top-0  flex items-center justify-center gap-2 rounded rounded-l-none  text-white bg-laranja z-10 p-2 duration-300 hover:bg-red-600 hover:w-16">
                    <ChevronDown />
                </button>
            </Link>
            <div className="w-full absolute h-screen">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="hidden lg:block h-screen">
                        <Viewer fileUrl={Dinamica}
                            defaultScale={1}
                            onDocumentLoad={(e) => {
                                setTotalPages(e.doc.numPages)
                            }}
                            plugins={[defaultLayoutPluginInstance, fullScreenPluginInstance, pageNavigationPluginInstance]}
                        />
                    </div>
                    <div className="block lg:hidden h-80viewew">
                        <Viewer fileUrl={Dinamica}
                            plugins={[defaultLayoutPluginInstance, fullScreenPluginInstance, pageNavigationPluginInstance]}
                        />
                    </div>
                </Worker>
            </div>
        </>

    )
}