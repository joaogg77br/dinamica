

export default function Explain({title,text,img,side}){
    return(
        <div className="p-4">   
            <div className="flex flex-col bg-zinc-100 rounded-2xl p-2">
                <img src={img} alt="Not found" className="w-full rounded-2xl mb-4" />
                <div>
                    <h1 className="font-semibold text-xl mb-4 mt-4">{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}