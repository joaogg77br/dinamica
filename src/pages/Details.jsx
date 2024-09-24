import Header from "../components/Header";
import Info from "../components/Info";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Scrolltop from "../components/ScrollTop";


export default function Details(){
    const {id} = useParams()
    const [info,setInfo] = useState([])
    const [loading,setLoading]= useState(true)
      useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        setInfo(response.data)
        console.log(response.data)
      } catch (err) {
        setError('Erro ao buscar os dados');
      } finally {
        setLoading(false);
      }
    }
fetchData()
},[]);

let x = info[id];
console.log(x)

    return(
        <div>
          <Scrolltop/>
            <header>
                <Header/>
                <Info Title={"Details"}></Info>
            </header>
            {x ?
                <div>
                    {x.title}
                </div>
                :
                <h1>Informação não encontrada. T_T</h1>
            }
        </div>
    )
}