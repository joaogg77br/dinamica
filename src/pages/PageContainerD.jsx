import ElementPdf from "../components/ElementPfd"
import dinamica from "../assets/Pdfs/Lei 12.690-12.pdf"
export default function PageContainerC() {
    return(
        <ElementPdf document={dinamica}/>
    )
}