import { Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './navbars/Navbar'
import logo from '../assets/images/logo-black-500.png'
import logoWhite from '../assets/images/logo-white-500.png'
export default function Header() {
    return(
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                   
                        <Link className='ms-auto' to='/albums'>Albums</Link>
                        <Link className='ms-auto' to='/editing'>Editing</Link>
                        <Link className='ms-auto' to='/wall-art'>Wall Art</Link>
                        <Link className='ms-auto' to='/image-box'>Image Box</Link>
                        <Link className='ms-auto' to='/about'>About</Link>
                        <Link className='ms-auto' to='/cart'><FaShoppingCart />Cart</Link>
                        <Link className='ms-auto' to='/login'>Login/Create</Link>
                    
                </Container>
            </Navbar>
        </header>
    )
}