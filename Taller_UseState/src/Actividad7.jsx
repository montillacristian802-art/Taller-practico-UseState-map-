function Actividad7() {

    const peliculas = [
        {
            id: 1,
            titulo: "Titanic",
            director: "James Cameron",
            genero: "Romance",
            año: 1997,
            duracion: "3h 14min"
        },
        {
            id: 2,
            titulo: "Avatar",
            director: "James Cameron",
            genero: "Ciencia ficción",
            año: 2009,
            duracion: "2h 42min"
        },
        {
            id: 3,
            titulo: "Avengers: Endgame",
            director: "Anthony Russo y Joe Russo",
            genero: "Acción",
            año: 2019,
            duracion: "3h 2min"
        },
        {
            id: 4,
            titulo: "Jurassic Park",
            director: "Steven Spielberg",
            genero: "Aventura",
            año: 1993,
            duracion: "2h 7min"
        },
        {
            id: 5,
            titulo: "The Dark Knight",
            director: "Christopher Nolan",
            genero: "Acción",
            año: 2008,
            duracion: "2h 32min"
        },
        {
            id: 6,
            titulo: "Toy Story",
            director: "John Lasseter",
            genero: "Animación",
            año: 1995,
            duracion: "1h 21min"
        },
        {
            id: 7,
            titulo: "The Matrix",
            director: "Lana y Lilly Wachowski",
            genero: "Ciencia ficción",
            año: 1999,
            duracion: "2h 16min"
        },
        {
            id: 8,
            titulo: "Harry Potter y la piedra filosofal",
            director: "Chris Columbus",
            genero: "Fantasía",
            año: 2001,
            duracion: "2h 32min"
        },
        {
            id: 9,
            titulo: "El Rey León",
            director: "Roger Allers y Rob Minkoff",
            genero: "Animación",
            año: 1994,
            duracion: "1h 28min"
        },
        {
            id: 10,
            titulo: "Spider-Man: No Way Home",
            director: "Jon Watts",
            genero: "Acción",
            año: 2021,
            duracion: "2h 28min"
        }
    ];

    return (
        <div>

            <h1>Catálogo de películas</h1>

            <div className="peliculas">
                {peliculas.map((pelicula) => (
                    
                    <div className="pelicula">

                        <h2>{pelicula.titulo}</h2>
                        <p>ID: {pelicula.id}</p>
                        <p>Director: {pelicula.director}</p>
                        <p>Género: {pelicula.genero}</p>
                        <p>Año: {pelicula.año}</p>
                        <p>Duración: {pelicula.duracion}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Actividad7;