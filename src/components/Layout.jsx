import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <div className="m-5 lg:m-10 py-5 lg:py-10 bg-white rounded-lg shadow-lg">
                <h1 className="font-black text-3xl lg:text-5xl text-center">
                    Java
                    <span className="text-indigo-600">
                    Script {' -- '}
                    </span>
                    Metodos {''}
                    <span className="text-indigo-600">
                        Arrays
                    </span>
                </h1>
            </div>

            <Outlet />

            <footer className="text-2xl bg-indigo-400 text-white text-center py-5">
                <span className="text-black font-bold">
                Elaborado : {' '}
                </span>
                <i>Luis Felipe Ramos</i> | 2023.
            </footer>
        </div>
    )
}

export default Layout
