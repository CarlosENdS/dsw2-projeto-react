import Navbar from '../Navbar'
import './Header.css'

const Header = ({title}) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Navbar />
        </header>
    )
}

export default Header;