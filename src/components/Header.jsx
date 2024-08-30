import {Menu} from "lucide-react"
import MyImage from '../assets/Logo.png'
export default function Header(){
    return(
        <>
        <header className="flex justify-between p-3">
            <img src={MyImage} alt="Logo" />

            <div className="flex gap-4 ">
                <button className="text-white bg-orange-500 rounded-xl p-2">Contate-nos</button>
                <div className="bg-green-900 rounded-xl flex items-center p-2">
                    <Menu color="white"/>
                </div>
            </div>
        </header>
        </>
    )
}