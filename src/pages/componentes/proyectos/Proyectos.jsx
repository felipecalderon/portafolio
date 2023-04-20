import Proyecto from "./Proyecto"


export default function Proyectos(){
    const proyectos = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
    ]
    if(!proyectos) return <p>No hay proyectos</p>
    return (
    <div className="bg-white dark:bg-gray-800 container mx-auto flex flex-wrap py-6">
        {
            proyectos.map(proyecto => <Proyecto key={proyecto.id} proyecto={proyecto} /> )
        }
    </div>
    )
}