import "./styles.css"

import { Outlet } from "react-router"

export function Layout() {

    return (
        <div>
            <header className="user">
                <p>Olá, Fulano</p>
            </header>

            <Outlet />

            <footer>
                <span>
                    Todos os direitos reservados
                </span>
            </footer>
        </div>
    )
}