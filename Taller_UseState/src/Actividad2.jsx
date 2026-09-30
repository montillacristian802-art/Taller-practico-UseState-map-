function Actividad2(){
    const ciudades=[
        "Bogota",
        "Medellin",
        "Cali",
        "Nariño",
        "Bucaramanga",
        "Boyaca",
        "Cartagena",
        "Barranquilla",
        "Popayan",
        "Manizales"
    ]
    return(
        <div className="ciudades">
            <h1>Ciudades</h1>
            <ul>
                {ciudades.map((ciudad)=>(
                    <li>{ciudad} </li>
                ))}
            </ul>
        </div>
    )
}
export default Actividad2