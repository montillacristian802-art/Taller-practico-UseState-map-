function Actividad4(){

    const animales = [
        {
            nombre: "León",
            especie: "Mamífero",
            habitat: "Sabana"
        },
        {
            nombre: "Tigre",
            especie: "Mamífero",
            habitat: "Selva"
        },
        {
            nombre: "Águila",
            especie: "Ave",
            habitat: "Montañas"
        },
        {
            nombre: "Delfín",
            especie: "Mamífero",
            habitat: "Océano"
        },
        {
            nombre: "Cocodrilo",
            especie: "Reptil",
            habitat: "Ríos"
        },
        {
            nombre: "Pingüino",
            especie: "Ave",
            habitat: "Regiones polares"
        },
        {
            nombre: "Elefante",
            especie: "Mamífero",
            habitat: "Sabana"
        },
        {
            nombre: "Serpiente",
            especie: "Reptil",
            habitat: "Selva"
        },
        {
            nombre: "Oso polar",
            especie: "Mamífero",
            habitat: "Ártico"
        },
        {
            nombre: "Rana",
            especie: "Anfibio",
            habitat: "Bosques y ríos"
        }
    ];

    return(
        <div> 
            <h1>Lista de animales</h1>
            <div className="contenedor-tarjetas">
                {animales.map((animal) => (
                    <div className="tarjeta">
                        <h2>{animal.nombre}</h2>
                        <p>Especie: {animal.especie}</p>
                        <p>Hábitat: {animal.habitat}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Actividad4