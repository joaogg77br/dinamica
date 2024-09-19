import leftCanto from "../assets/Frame 21.png"
import SquareRigth from "../assets/Frame 23.png"
import SquareMid from "../assets/Frame 22.png"
import ImageBefore from "../assets/Frame 19.png"
import Notebook from "../assets/Frame 20.png"
export default function Banner() {
    return (
        <div className="p-4 sm:p-8">
            <div className="flex flex-col justify-center items-center relative rounded-2xl w-full bg-verde h-96 ">
                <img src={leftCanto} alt="" className="absolute top-0 left-0 rounded-2xl md:h-32 "/>
                <img src={SquareRigth} alt=""  className="absolute top-0 right-0 rounded-2xl lg:h-32" />
                <img src={SquareMid} alt=""  className="absolute bottom-24 left-5 h-12 lg:h-20 lg:bottom-40 lg:left-4 z-10"/>
                <img src={ImageBefore} alt=""  className="absolute bottom-0 left-2 h-32 md:h-40 lg:h-52 z-0"/>
                <img src={Notebook} alt=""  className="absolute bottom-0 right-0 h-36 md:h-40 lg:h-60 z-0"/>
                <p className="text-xl text-white font-medium text-center p-4 z-10
                    md:text-2xl lg:text-4xl
                ">
                    A melhor solução<br/>
                    tecnológica para empresas<br/>
                    que trabalham com<br/>
                    gestão e intermediação<br/>
                    de mão de obra.
                </p>
                <button className="text-orange-500 border-2 border-orange-500 duration-300 rounded-lg p-1 z-10 px-5 hover:bg-orange-500 hover:text-white">Saiba mais</button>
            </div>
        </div>
    )
}