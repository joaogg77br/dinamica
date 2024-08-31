

export default function Footer(){
    return(

        <footer>
            <div className="text-zinc-400">
                <img src="" alt="" />
                <p>Dinâmica Cooperativa © 2024. Todos os diretos reservados</p>
            </div>
            <ul className="grid gap-4 mt-5 hover:bg-fuchsia-400">
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">Home</li>
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">A Dinâmica</li>
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">Blog</li>
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">Contate-nos</li>
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">Termos & Privacidade</li>
                <li className="p-1 cursor-pointer duration-300 hover:bg-orange-500">FAQ</li>
            </ul>
        </footer>
    )
}