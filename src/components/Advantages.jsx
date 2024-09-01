

export default function Advantagens({text,img,number}){
    return(
        <div className="">
            <div className="relative h-32 w-32 bg-orange-500 rounded-2xl 
            sm:h-40 sm:w-60
            ">
                <div className="flex h-10 w-10 justify-center items-center absolute top-0 left-0 bg-green-900 text-white rounded-xl 
                    sm:h-12 sm:w-12
                ">{number}</div>
                <div className="flex justify-center items-center text-white w-full h-full text-center p-2">
                    <img src={img} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}