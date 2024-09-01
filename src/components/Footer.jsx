

export default function Footer(){
    return(

        <footer className="sm:flex sm:justify-between">
            <div className="flex flex-col text-zinc-400 sm:flex-row p-10">
                <img src="" alt="" />
                <p>Dinâmica Cooperativa © 2024. Todos os diretos reservados</p>
            </div>
            <ul className="grid grid-cols-2 pl-2 gap-5 mt-5 duration-300 sm:gap-4 w-2/5 mb-10">
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Home</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">A Dinâmica</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Blog</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Contate-nos</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">Termos & Privacidade</li>
                <li className="relative pl-4 cursor-pointer duration-300 hover:text-orange-500 hover:right-4 hover:font-bold hover:underline">FAQ</li>
            </ul>
        </footer>
    )
}