import { X } from "lucide-react"
import { useState } from "react"



export default function PDFviwerFile({ pdfFile }) {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <div>
        </div>
    )
}