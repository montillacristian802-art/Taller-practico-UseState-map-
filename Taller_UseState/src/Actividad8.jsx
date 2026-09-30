function Actividad8() {

    const platos = [
        {
            id: 1,
            nombre: "Hamburguesa",
            categoria: "Comida rápida",
            precio: 18000
        },
        {
            id: 2,
            nombre: "Pizza",
            categoria: "Comida rápida",
            precio: 25000
        },
        {
            id: 3,
            nombre: "Pasta Alfredo",
            categoria: "Pastas",
            precio: 22000
        },
        {
            id: 4,
            nombre: "Ensalada",
            categoria: "Ensaladas",
            precio: 15000
        },
        {
            id: 5,
            nombre: "Sopa de verduras",
            categoria: "Sopas",
            precio: 12000
        },
        {
            id: 6,
            nombre: "Pollo a la plancha",
            categoria: "Platos fuertes",
            precio: 28000
        },
        {
            id: 7,
            nombre: "Arroz con pollo",
            categoria: "Platos fuertes",
            precio: 20000
        },
        {
            id: 8,
            nombre: "Tacos",
            categoria: "Comida mexicana",
            precio: 17000
        },
        {
            id: 9,
            nombre: "Lasagna",
            categoria: "Pastas",
            precio: 24000
        },
        {
            id: 10,
            nombre: "Pescado frito",
            categoria: "Platos fuertes",
            precio: 30000
        }
    ];

    return (
        <div>

            <h1>Menú de restaurante</h1>

            <div className="menu">
                {platos.map((plato) => (

                    <div className="plato">

                        <h2>{plato.nombre}</h2>
                        <p>ID: {plato.id}</p>
                        <p>Categoría: {plato.categoria}</p>
                        <p>Precio: ${plato.precio}</p>

                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Actividad8;