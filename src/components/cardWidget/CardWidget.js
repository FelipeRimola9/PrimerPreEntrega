/*##############
Importaciones
##############*/
// Modulos

// Estilos
import './CardWidget.css'
import { BsFillCartFill } from "react-icons/bs";
// Componentes

// Core


/*##############
Logica
##############*/
const CardWidget = (props) => {
        
    return(
        <p>
            <BsFillCartFill/> {props.cantidad}
        </p>

    )
}
/*##############
Exportaciones
##############*/
export default CardWidget