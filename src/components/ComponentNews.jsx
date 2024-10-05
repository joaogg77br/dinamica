

export default  function ComponentNews({Title,text,Imagem}) {
  return (
    <section>
    <div className="flex flex-col items-center gap-2 justify-center bg-white rounded-xl">
            <img src={Imagem} className="w-full"/>
            <h1 className="font-semibold font-nunitoSans">{Title}</h1>
        </div>
    </section>
  );
}