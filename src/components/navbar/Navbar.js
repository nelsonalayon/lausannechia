import { Title } from './styles.js'
import salesman from '../../json/salesmen.json'
import SalesMenComponent from '../salesmen/salesmen' 

const Navbar = () => {

    return (
        <div>
            <p>Llamanos o agenda una cita</p>

            <SalesMenComponent data = {salesman}/>
           
            
        </div>
        
    )

}

export default Navbar