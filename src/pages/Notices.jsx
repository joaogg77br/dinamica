import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";


export default  function Notices(){
    return(
        <div>
            <Header/>
            <Info Title={"Notícias"} />
            <Footer/>
        </div>
    )
}