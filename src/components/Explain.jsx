

export default function Explain({ title, text, img, side }) {

    return (
        <>
        
            <div className="bg-cinza flex gap-4 flex-col rounded-custom  md:flex-row lg:h-80 2xl:h-96">
                { side?
                    <img src={img} alt="" className="w-full md:max-w-80 md:h-80 2xl:h-96 2xl:max-w-96" />
                    :null
                }
                <div className="flex  flex-col justify-center p-6 gap-4 lg:p-10">
                    <h1 className="text-xl md:text-3xl font-bold 2xl:text-4xl">{title}</h1>
                    <p className="text-xl">{text}</p>
                </div>
                { !side?
                    <img src={img} alt="" className="w-full md:max-w-80 md:h-80 2xl:h-96 2xl:max-w-96" />
                    :null
                }
            </div>
        </>
    )}
