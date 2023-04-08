import { useLoaderData } from "react-router-dom"
import { metodos } from "../data/data"
import Metodo from "../components/Metodo"

export function loader() {
    return metodos
}

function Index() {

    const datos = useLoaderData()

    const { id, titulo, descripcion, imagen } = datos

    return (
        <div className="mx-5 lg:mx-10">
            <h2 className="text-indigo-600 text-2xl lg:text-4xl mb-5 lg:mb-10">
                JavaScript nos proporciona una serie de funciones predefinidas para el manejo de arrays.
            </h2>

            <h4 className="text-black tetx-3xl mb-10 font-bold">
                Antes de comenzar se deben estar preguntando ¿Qué son los Arrays?, bien, se los puede definir como un conjunto de datos ordenados por posiciones y todos asociados en una sola variable. Los datos pueden ser de cualquier tipo de dato como, por ejemplo, una cadena de texto, un numero o un objeto. Se podrá acceder a estos datos de manera independiente o agrupándolos. A continuación, se detallaran los métodos mas conocidos.
            </h4>

            {datos.map(metodo => (
                <Metodo
                    key={metodo.id}
                    metodo={metodo}
                />
            ))}
        </div>
    )
}

export default Index
