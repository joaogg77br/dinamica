


export default function Info({Title,text}){
    return(
    <div className="p-4 ">
        <h1 className="text-2xl font-semibold text-zinc-800">{Title}</h1>
        <p className="text-zinc-700">{text}</p>
    </div>
    )

}