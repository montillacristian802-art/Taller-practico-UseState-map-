function ActividadFinal() {

    const nombre = "Mundo Musical";
    const descripcion = "Un espacio para conocer diferentes instrumentos musicales.";
    const cantidadInstrumentos = 8;

    const instrumentos = [
        {
            nombre: "Guitarra",
            tipo: "Cuerda",
            nivel: "Básico"
        },
        {
            nombre: "Piano",
            tipo: "Teclado",
            nivel: "Básico"
        },
        {
            nombre: "Batería",
            tipo: "Percusión",
            nivel: "Intermedio"
        },
        {
            nombre: "Violín",
            tipo: "Cuerda",
            nivel: "Intermedio"
        },
        {
            nombre: "Flauta",
            tipo: "Viento",
            nivel: "Básico"
        },
        {
            nombre: "Saxofón",
            tipo: "Viento",
            nivel: "Avanzado"
        },
        {
            nombre: "Bajo",
            tipo: "Cuerda",
            nivel: "Intermedio"
        },
        {
            nombre: "Trompeta",
            tipo: "Viento",
            nivel: "Avanzado"
        }
    ];

    return (
        <div className="musica">

            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <h2>Instrumentos disponibles</h2>
            <p>Tenemos {cantidadInstrumentos} instrumentos disponibles.</p>

            <section>
                <ul>
                    {instrumentos.map((instrumento) => (
                        <li>

                            <h2>{instrumento.nombre}</h2>
                            <p>Tipo: {instrumento.tipo}</p>
                            <p>Nivel: {instrumento.nivel}</p>

                        </li>

                    ))}

                </ul>
            </section>
        </div>
    );
}

export default ActividadFinal;