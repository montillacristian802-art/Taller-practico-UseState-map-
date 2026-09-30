function Actividad1(){
    const libro=[
        {
            titulo:"El principito",
            autor:"Antoine de Saint Exupery",
            año_publicacion:"1943",
            editorial:"Reynal & Hitchcock",
            numero_paginas:"96 paginas"
        }
    ]
    return(
        <div className="libro">
            {libro.map((libro)=>(
                <div>
                    <h1>Titulo: {libro.titulo}</h1>
                    <p>autor: {libro.autor}</p>
                    <p>Año publicacion: {libro.año_publicacion}</p>
                    <p>Editorial: {libro.editorial}</p>
                    <p>Numero paginas: {libro.numero_paginas}</p>
                </div>
            ))}
        </div>
    )
}
export default Actividad1