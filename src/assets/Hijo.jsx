import Padre from "./Padre"


const Hijo =({nombre, hijoM})=>{
function cartero() {
    hijoM("hola padre como estas "+nombre)
}
return (
    <div>
        <button onClick={cartero}>Boton</button>
    </div>
)


}

export default Hijo;



