import ElementPdf from "../components/ElementPfd"
import dinamica from "../assets/Pdfs/LEI 5.764.pdf"
export default function PageContainerC() {
    return(
        <ElementPdf document={dinamica}/>
    )
}