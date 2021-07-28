const Aside = () => {
    return (
        <aside className="menu is-hidden-mobile">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li><a className="is-active">Resúmen</a></li>
            </ul>
            <p className="menu-label">
                Configurar
            </p>
            <ul className="menu-list">
                <li><a>Vuelos</a></li>
                <li><a>Paquetes</a></li>
                <li><a>Hoteles</a></li>
                <li><a>Seguros</a></li>
            </ul>

            <p className="menu-label">
                Administration
            </p>
            <ul className="menu-list">
                <li><a>Usuarios</a></li>
            </ul>
        </aside>
    )
}

export default Aside;