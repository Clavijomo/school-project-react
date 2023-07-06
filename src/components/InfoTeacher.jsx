import asignatures from "../data/listAsignatures";

const InfoTeacher = ({infoTeacher}) => {
  const {nombre, apellido, edad, direccion, telefono, materias, identificacion} = infoTeacher;

  return (
    <div className="bg-zinc-100 rounded-2xl h-full shadow-xl">
      {infoTeacher && Object.keys(infoTeacher).length ?
        <>
          <div className="bg-zinc-300 rounded-t-2xl p-10">
            <div className="px-5 w-full flex-col flex items-center text-center justify-center gap-3">
              <div>
                <img className="w-32 rounded-full shadow-2xl bg-white" src="https://cdn-icons-png.flaticon.com/512/194/194935.png" alt=""/>
              </div>
              <div>
                <div className="space-y-2">
                  <h1 className="font-semibold md:text-xl">{nombre} {apellido}</h1>
                  <p className="text-zinc-500 text-sm">Profesor</p>
                </div>
              </div>        
            </div>                
          </div>
          <h1 className="text-center mt-3 font-semibold">Información básica</h1>
          <div className="p-5">          
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="text-lg">Colegio</h1>
                <p className="text-sm text-zinc-400">School</p>
              </div>
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="md:text-lg">Dirección de residencia</h1>
                <p className="text-sm text-zinc-400">{direccion}</p>
              </div>
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="md:text-lg">Número de identificación</h1>
                <p className="text-sm text-zinc-400">{identificacion}</p>
              </div>
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="text-lg">Materia</h1>
                <div className="text-sm text-zinc-400">
                  <p>{materias ? asignatures.filter(asignature => asignature.id === materias)[0].nombre : "No hay materias inscritas"}</p>
                </div>
              </div>
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="text-lg">Teléfono</h1>
                <p className="text-sm text-zinc-400">{telefono}</p>
              </div>
              <div className="shadow-md border rounded-xl p-4">
                <h1 className="text-lg">Edad</h1>
                <p className="text-sm text-zinc-400">{edad}</p>
              </div>
            </div>
          </div> 
        </>
        : 
        <div className="h-96 md:h-full flex items-center justify-center flex-col gap-3">
          <p className="font-semibold text-center">Ningún profesor seleccionado</p>
          <h1 className="text-md md:text-lg text-zinc-400 text-center">Haz clic en Ver detalle del profesor para ver su información completa</h1>
        </div>
      }             
    </div>
  )
}

export default InfoTeacher;