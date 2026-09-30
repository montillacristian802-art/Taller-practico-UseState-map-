function Actividad6() {

    const jugadores = [
        {
            numero: 1,
            nombre: "David",
            apellido: "Ospina",
            posicion: "Portero",
            edad: 36
        },
        {
            numero: 2,
            nombre: "Daniel",
            apellido: "Muñoz",
            posicion: "Defensa",
            edad: 29
        },
        {
            numero: 3,
            nombre: "Davinson",
            apellido: "Sánchez",
            posicion: "Defensa",
            edad: 30
        },
        {
            numero: 4,
            nombre: "Carlos",
            apellido: "Cuesta",
            posicion: "Defensa",
            edad: 27
        },
        {
            numero: 5,
            nombre: "Johan",
            apellido: "Mojica",
            posicion: "Defensa",
            edad: 33
        },
        {
            numero: 6,
            nombre: "Jefferson",
            apellido: "Lerma",
            posicion: "Centrocampista",
            edad: 31
        },
        {
            numero: 7,
            nombre: "Luis",
            apellido: "Díaz",
            posicion: "Delantero",
            edad: 29
        },
        {
            numero: 8,
            nombre: "James",
            apellido: "Rodríguez",
            posicion: "Centrocampista",
            edad: 35
        },
        {
            numero: 9,
            nombre: "Jhon",
            apellido: "Córdoba",
            posicion: "Delantero",
            edad: 33
        },
        {
            numero: 10,
            nombre: "Richard",
            apellido: "Ríos",
            posicion: "Centrocampista",
            edad: 26
        },
        {
            numero: 11,
            nombre: "Jhon Arias",
            apellido: "Arias",
            posicion: "Centrocampista",
            edad: 28
        }
    ];

    return (
        <div>
            <h1>Equipo de fútbol</h1>

            <table className="jugadores">
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Posicion</th>
                        <th>Edad</th>
                    </tr>
                </thead>

                <tbody>
                    {jugadores.map((jugador) => (
                        <tr>
                            <td>{jugador.numero}</td>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.apellido}</td>
                            <td>{jugador.posicion}</td>
                            <td>{jugador.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Actividad6;