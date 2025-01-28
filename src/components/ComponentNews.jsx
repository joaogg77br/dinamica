import { Link } from "react-router-dom";

export default function ComponentNews({ Title, link, Imagem }) {
  return (
    <section className="flex flex-col gap-0 p-0">
      <div className="font-nunitoSans w-full sm:w-96 h-80 flex flex-col  items-center  rounded-2xl justify-start bg-white ">
        <img src={Imagem} className="w-full sm:w-96 h-80 rounded-t-2xl object-cover " />
      </div>
      <h1 className=" text-center font-semibold bg-white w-full sm:w-96 h-44 rounded-b-2xl font-nunitoSans text-zinc-800 lg:pt-5 p-4 text-xl">{Title}</h1>
    </section>

  );
}