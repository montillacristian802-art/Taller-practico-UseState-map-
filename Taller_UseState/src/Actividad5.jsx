function Actividad5(){
    const videojuegos = [
        {
            id: 1,
            nombre: "Minecraft",
            plataforma: "PC",
            genero: "Aventura",
            año: 2011
        },
        {
            id: 2,
            nombre: "FIFA 23",
            plataforma: "PlayStation 5",
            genero: "Deportes",
            año: 2022
        },
        {
            id: 3,
            nombre: "Grand Theft Auto V",
            plataforma: "PC",
            genero: "Acción",
            año: 2013
        },
        {
            id: 4,
            nombre: "Fortnite",
            plataforma: "PC",
            genero: "Battle Royale",
            año: 2017
        },
        {
            id: 5,
            nombre: "The Legend of Zelda",
            plataforma: "Nintendo Switch",
            genero: "Aventura",
            año: 2017
        },
        {
            id: 6,
            nombre: "God of War",
            plataforma: "PlayStation 4",
            genero: "Acción",
            año: 2018
        },
        {
            id: 7,
            nombre: "Among Us",
            plataforma: "PC",
            genero: "Multijugador",
            año: 2018
        },
        {
            id: 8,
            nombre: "Red Dead Redemption 2",
            plataforma: "Xbox One",
            genero: "Acción",
            año: 2018
        }
    ];

    return(
        <div>
            <h1>Tabla de videojuegos</h1>

            <table className="videojuegos">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Genero</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {videojuegos.map((videojuego)=>(
                        <tr>
                            <td>{videojuego.id}</td>
                            <td>{videojuego.nombre}</td>
                            <td>{videojuego.plataforma}</td>
                            <td>{videojuego.genero}</td>
                            <td>{videojuego.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Actividad5