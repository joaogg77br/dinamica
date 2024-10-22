import ElementPdf from "../components/ElementPfd"
import dinamica from "../assets/Pdfs/dinamica_news-1_ED.pdf"
export default function PageContainerA() {
    return(
        <ElementPdf document={dinamica}/>
    )
}