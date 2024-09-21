

export default function Advantagens({text,img,number}){
    return(
        <div className="">
            <div className="flex items-center relative h-52 w-40 sm:min-h-40 sm:w-52 bg-laranja rounded-2xl p-5 ">
                <div className="flex h-10 w-10 justify-center items-center absolute top-fifityMin left-fifityMin bg-verde text-white rounded-xl sm:h-12 sm:w-12 ">{number}</div>
                <div className="flex flex-col justify-end text-white w-full text-center  lg:p-10 ">
                    <div className="flex flex-col items-center justify-center">
                    <img src={img} alt="" />
                    <p className="">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}