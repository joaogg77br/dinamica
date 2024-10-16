import { useState } from "react"
import { Viewer, Worker, SepecialZoonLevel } from "@react-pdf-viewer/core"
import '@react-pdf-viewer/core/lib/styles/index.css';

import { X } from "lucide-react"

export default function PDFviwerFile({ pdfFile }) {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <>
            <X className=" bg-laranja text-white rounded p-2" size={50}/>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" className="z-0">
                <div className="w-1/2 lg:w-full h-screen flex flex-col items-center justify-center bg-red-400">
                    <Viewer fileUrl={pdfFile} onDocumentLoadSuccess={onDocumentLoadSuccess} />
                </div>
            </Worker>
        </>
    )
}