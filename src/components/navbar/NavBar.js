/*##############
Importaciones
##############*/
// Modulos

// Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget'
// Componentes

// Core


/*##############
Logica
##############*/
const NavBar = (props) => {
    
    return(
        <header className='navbar'>
            <CardWidget cantidad = "10"/>
        </header>

    )
}
/*##############
Exportaciones
##############*/
export default NavBar