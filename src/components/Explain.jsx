

export default function Explain({title,text,img,side}){
    
    return(
        <div className="">   
            <div className="flex flex-col bg-cinza rounded-3xl lg:flex-row w-full sm:items-center ">
                { side?
                <div>
                    <img src={img} alt="Not found" className="w-full rounded-3xl h-30" />
                </div>
                    :null
                }
                <div className="flex flex-col p-10 px-20">
                    <h1 className="font-semibold text-start text-xl mb-4 m-4 sm:text-3xl">{title}</h1>
                    <p className="m-4 text-zinc-800 ">{text}</p>
                </div>
                { !side?
                <div>
                    <img src={img} alt="Not found" className="h-96 w-full sm:h-full" />
                </div>
                    :null
                }
                
            </div>
        </div>
    )
}