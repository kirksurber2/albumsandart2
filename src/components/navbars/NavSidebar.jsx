
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import './NavSidebar.css'
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup, FaPeopleRoof, FaCommentSms, FaRegMoneyBill1 } from "react-icons/fa6";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { IoSettingsSharp, IoLogOut, IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";
import logo from '../../assets/images/images/logoBlack-200.png'
import { GrSchedules } from 'react-icons/gr'
import { UserContext } from '../../context/UserProvider';



export default function NavSideBar() {
    const {user, logout } = useContext(UserContext)
    const params = useParams()
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='sidebarContainer'>
            {isOpen && 
                <img className='logoImage' src={logo} alt='logo'></img>
            }
            {isOpen?
                <>
                <IoChevronForwardCircleOutline size={30} className='openButton' onClick={() => setIsOpen(isOpen => !isOpen)}/>
                <p>{user.firstName} {user.lastName}</p>
                </>                 
            
            :
                <IoChevronBackCircleOutline size={30} className='openButton' onClick={() => setIsOpen(isOpen => !isOpen)} />

            }
            
            <div className='menuItems'>
                <Link to={`/${params.companyId}/Dashboard`} ><FaHome size={20} className='icon'/> {isOpen &&  'Dashboard'}</Link>
                <Link to={`/${params.companyId}/Clients`} ><FaPeopleRoof size={20} className='icon'/> {isOpen && 'Clients'}</Link>
                <Link to={`/${params.companyId}/Leads`} > <FaPeopleGroup size={20} className='icon'/> {isOpen && 'Leads' }</Link>
                <Link to={`/${params.companyId}/Sales`} ><FaRegMoneyBill1 size={20} className='icon'/> {isOpen && 'Sales'}</Link>
                <Link to={`/${params.companyId}/Products`} ><BiSolidPhotoAlbum size={20} className='icon'/> {isOpen && 'Products'}</Link>
                <Link to={`/${params.companyId}/SMS`} ><FaCommentSms size={20} className='icon'/> {isOpen && 'SMS'}</Link>
                <Link to={`/${params.companyId}/Scheduling`} ><GrSchedules size={20} className='icon'/> {isOpen && 'Coming Soon'}</Link>
            </div>
            <div className='logoutSettings'>
                <Link to={`${params.companyId}/Settings`}><IoSettingsSharp size={20} className='iconLogout'/> {isOpen && 'Settings'}</Link>
                <Link to={'/Login'} onClick={logout}><IoLogOut size={20} className='iconLogout'/> {isOpen && 'Logout'}</Link>
            </div>
        </div>
    )
}