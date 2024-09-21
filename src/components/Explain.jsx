

export default function Explain({ title, text, img, side }) {

    return (
        <>
            <div className="bg-cinza flex gap-4 flex-col pb-4 rounded-3xl md:flex-row">
                { side?
                    <img src={img} alt=""  className="w-full"/>
                    :null
                }
                <div className="flex  flex-col justify-center p-4 gap-4">
                    <h1 className="text-2xl font-medium">{title}</h1>
                    <p className="text-xl">{text}</p>
                </div>
                { !side?
                    <img src={img} alt="" />
                    :null
                }
            </div>

        </>
    )
}