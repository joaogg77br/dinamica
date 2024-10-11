

export default function Advantagens({text,img,number}){
    return(
        <div className="">
            <div className="flex items-center relative h-52 w-40 sm:h-40 sm:w-44 md:w-64 lg:w-full 2xl:h-52   bg-laranja rounded-2xl p-5 2xl:pb-10">
                <div className="flex h-10 w-10 justify-center items-center absolute top-fifityMin left-fifityMin bg-verde text-white rounded-xl sm:h-12 sm:w-12 text-md font-bold">{number}</div>
                <div className="flex flex-col justify-end text-white w-full text-center  lg:p-10 ">
                    <div className="flex flex-col items-center justify-center">
                    <img src={img} alt=""  className="2xl:h-20"/>
                    <p className="2xl:text-xl font-semibold">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}