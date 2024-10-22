import ElementPdf from "../components/ElementPfd"
import dinamica from "../assets/Pdfs/dinamica_news-3_ED.pdf"
export default function PageContainerC() {
    return(
        <ElementPdf document={dinamica}/>
    )
}