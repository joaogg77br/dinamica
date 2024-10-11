import { Link } from "react-router-dom";

export default  function ComponentNews({Title,link,Imagem}) {
  return (
    <section>
   <Link to={link}>
    <div className="font-nunitoSans lg:h-96 lg:w-80 flex flex-col  items-center gap-2 rounded-2xl justify-start bg-white 2xl:w-80">
            <img src={Imagem} className="w-full h-3/5 rounded-t-2xl object-cover" />
            <h1 className="font-semibold font-nunitoSans text-zinc-800 lg:pt-5 m-4">{Title}</h1>
        </div>
      </Link>
    </section>

  );
}