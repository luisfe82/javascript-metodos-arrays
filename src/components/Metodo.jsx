function Metodo({metodo}) {

    const {titulo,tipo,sintaxis,link,descripcion,imagen} = metodo

    return (
        <div className="mb-10 bg-white shadow-md px-5 py-10 rounded-xl">

            <h2 className="text-2xl lg:text-6xl text-indigo-600 font-bold mb-5">
                {titulo} {' - '} <span className="border-4  text-2xl text-red-700 p-2">{tipo}</span>
            </h2>

            <div className="lg:flex md:block">

                <div className="block lg:w-1/2 w-full">

                    <p className="text-xl lg:text-3xl pe-5 ">
                        {descripcion}
                    </p>
                    <p className=" mt-5  lg:text-2xl text-indigo-500">
                        Sintaxis: <br />
                        <code>{sintaxis}</code>
                    </p>
                    <div className="bg-blue-400 mt-10 text-white p-2">
                        <a href={link} target="_blank">Deseas ver mas...</a>
                    </div>

                </div>
                <picture className="block lg:w-1/2 w-full">
                    <img src={imagen} alt={titulo} width="880" height="284" />
                </picture>

            </div>
        </div>
    )
}

export default Metodo
