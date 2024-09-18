

export default function Advantagens({text,img,number}){
    return(
        <div className="">
            <div className="relative h-40 w-40 md:h-52 md:w-52 bg-orange-500 rounded-2xl 
            p-10
            sm:h-40 sm:w-60 sm:p-0
            ">
                <div className="flex h-10 w-10 justify-center items-center absolute top-fifityMin left-fifityMin bg-green-900 text-white rounded-xl 
                    sm:h-12 sm:w-12
                ">{number}</div>
                <div className="flex flex-col justify-center items-center text-white w-full h-full text-center p-2">
                    <img src={img} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}