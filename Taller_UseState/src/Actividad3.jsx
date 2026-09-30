function Actividad3(){
    const canciones=[
        {
            id:"1",
            titulo:"Blinding Lights",
            artista:"The Weeknd",
            album:"After Hours",
            año:"2020"
        },
        {
            id:"2",
            titulo:"Shape of You",
            artista:"Ed Sheeran",
            album:"Divide",
            año:"2017"
        },
        {
            id:"3",
            titulo:"Havana",
            artista:"Camila Cabello",
            album:"Camila",
            año:"2018"
        },
        {
            id:"4",
            titulo:"Bad Guy",
            artista:"Billie Eilish",
            album:"When We All Fall Asleep, Where do we go",
            año:"2019"
        },
        {
            id:"5",
            titulo:"Despacito",
            artista:"Luis Fonsi",
            album:"Vida",
            año:"2019"
        },
        {
            id:"6",
            titulo:"Perfect",
            artista:"Ed Sheeran",
            album:"Divide",
            año:"2017"
        },
        {
            id:"7",
            titulo:"Levitating",
            artista:"Dua Lipa",
            album:"Future Nostalgia",
            año:"2020"
        },
        {
            id:"8",
            titulo:"Vivir mi vida",
            artista:"Marc Anthony",
            album:"3.0",
            año:"2013"
        }
    ]

    return(
        <div>
            <h1>Tabla de canciones</h1> 
            <table className="canciones"> 
                <thead> 
                    <tr> 
                        <th>ID</th> 
                        <th>Título</th> 
                        <th>Artista</th> 
                        <th>Álbum</th> 
                        <th>Año</th> </tr> 
                </thead> 
                <tbody> 
                    {canciones.map((cancion) => ( 
                        <tr> 
                            <td>{cancion.id}</td> 
                            <td>{cancion.titulo}</td> 
                            <td>{cancion.artista}</td> 
                            <td>{cancion.album}</td> 
                            <td>{cancion.año}</td> 
                        </tr> 
                    ))} 
                </tbody> 
            </table>
        </div>
    )
}
export default Actividad3