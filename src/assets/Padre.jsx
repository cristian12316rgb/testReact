import { useState } from "react"
import Hijo from "./Hijo"



const Padre = ()=>{
  const [mensajeDelHijo,manejadorDelHijo] = useState(" ")
  function controlador(mensaje){
    manejadorDelHijo(mensaje)
  }

  return(
    <div>
      <h1>Hola Cristian Gabriel Quipildor</h1>
      <p>Mensaje del hijo {mensajeDelHijo}</p>
      <Hijo nombre = "carlos" hijoM={controlador}/>

    </div>
  )


}

export default Padre;