import ElementPdf from "../components/ElementPfd"
import dinamica from "../assets/Pdfs/dinamica_news-2_ED.pdf"
export default function PageContainerB() {
    return(
        <ElementPdf document={dinamica}/>
    )
}