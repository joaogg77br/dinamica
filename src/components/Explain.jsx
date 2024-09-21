

export default function Explain({ title, text, img, side }) {

    return (
        <>
            <div className="bg-cinza flex gap-4 flex-col rounded-3xl  md:flex-row">
                { side?
                    <img src={img} alt=""  className="sm:w-1/2 sm:h-60"/>
                    :null
                }
                <div className="flex  flex-col justify-center p-6 gap-4 lg:pl-10">
                    <h1 className="text-3xl font-bold ">{title}</h1>
                    <p className="text-xl">{text}</p>
                </div>
                { !side?
                    <img src={img} alt="" className="sm:w-1/2 sm:h-60" />
                    :null
                }
            </div>

        </>
    )
}