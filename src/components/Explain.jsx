

export default function Explain({title,text,img,side}){
    return(
        <div className="p-4 sm:p-8">   
            <div className="flex flex-col   bg-zinc-50 rounded-3xl sm:flex-row">
                <img src={img} alt="Not found" className="max-h-96 w-full sm:h-full sm:w-60" />
                <div>
                    <h1 className="font-semibold text-xl mb-4 m-4 sm:text-3xl">{title}</h1>
                    <p className="m-4 text-zinc-800">{text}</p>

                </div>
            </div>
        </div>
    )
}