

export default function Explain({title,text,img,side}){
    
    return(
        <div className="p-4 sm:p-8">   
            <div className="flex flex-col bg-cinza rounded-3xl lg:flex-row w-full sm:items-center ">
                { side?
                <div>
                    <img src={img} alt="Not found" className="max-h-96 w-full rounded-3xl sm:h-full sm:w-96" />
                </div>
                    :null
                }
                <div className="flex flex-col p-4 justify-center items-center">
                    <h1 className="font-semibold text-xl mb-4 m-4 sm:text-3xl">{title}</h1>
                    <p className="m-4 text-zinc-800 ">{text}</p>
                </div>
                { !side?
                <div>
                    <img src={img} alt="Not found" className="max-h-96 w-full sm:h-full sm:w-96" />
                </div>
                    :null
                }
                
            </div>
        </div>
    )
}