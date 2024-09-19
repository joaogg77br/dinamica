

export default function Advantagens({text,img,number}){
    return(
        <div className="">
            <div className="relative h-60 w-40 md:h-52 md:w-52 bg-laranja rounded-2xl 
            p-10
            sm:h-40 sm:w-60 sm:p-0
            ">
                <div className="flex h-10 w-10 justify-center items-center absolute top-fifityMin left-fifityMin bg-verde text-white rounded-xl 
                    sm:h-12 sm:w-12
                ">{number}</div>
                <div className="flex flex-col justify-center text-white w-full text-center  lg:pt-10 ">
                    <div className="flex flex-col items-center justify-center">
                    <img src={img} alt="" />
                    <p className="">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}