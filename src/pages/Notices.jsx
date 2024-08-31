import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";


export default  function Notices(){
    return(
        <div>
            <Header/>
            <Info Title={"Notícias"} text={"Cooperativa de trabalho, serviços gerais e administrativos."}/>
            <Footer/>
        </div>
    )
}