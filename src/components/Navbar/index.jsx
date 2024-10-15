import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Modal from '../WriteModal'

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between" >
            <Link to="/"><img src={Logo} alt="logo mate letters" /></Link>
            <Modal/>
        </nav>
    )
}

export default Navbar