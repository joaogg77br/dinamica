
export default function Explain({ title, text, img, side }) {

    return (
        <>
            <div className="bg-cinza flex gap-4 h-auto flex-col rounded-t-custom rounded-b-3xl md:rounded-custom  md:flex-row lg:h-80 lg:w-full 2xl:h-96">
                { side?
                    <img src={img} alt="" className="w-full h-60 md:max-w-80 md:h-80 2xl:h-96 2xl:max-w-96 rounded-custom object-cover" />
                    :null
                }
                { !side?
                    <img src={img} alt="" className="w-full h-60 md:max-w-80 md:h-80 2xl:h-96 2xl:max-w-96 md:hidden rounded-custom object-cover" />
                    :null
                }
                <div className="flex flex-col justify-center p-6 gap-4 lg:p-10">
                    <h1 className="text-md md:text-3xl font-bold 2xl:text-4xl">{title}</h1>
                    <p className="text-sm">{text}</p>
                </div>
                { !side?
                    <img src={img} alt="" className="hidden w-full h-60 md:max-w-80 md:h-80 2xl:h-96 2xl:max-w-96 md:block rounded-custom object-cover" />
                    :null
                }
            </div>
        </>
    )}
