
export default function Post({ Title, Time }) {
    return (
        <div className="flex flex-col gap-10 items-start px-5 sm:px-4 lg:px-0 pb-10 pt-10">
            <h1 className="text-4xl font-bold text-zinc-800 pt-10">{Title}</h1>
            <div className="text-zinc-400">{Time}</div>
        </div>
    )

}
