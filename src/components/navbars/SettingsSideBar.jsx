'use client'
import  Image  from 'next/image'
import a from 'next/a'
import { useState } from 'react'
import styles from './SettingsSidebar.module.css'
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup, FaPeopleRoof, FaCommentSms, FaRegMoneyBill1 } from "react-icons/fa6";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { BsBarChartSteps } from "react-icons/bs";





export default function NavSideBar() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='settingsSidebarContainer' >
            
         
            <div className='menuItems'>
                <a href='/Dashboard' ><BsBarChartSteps size={20} className='icon'/> {isOpen &&  'Workflow'}</a>
                <a href='/prints' ><MdOutlinePhotoSizeSelectLarge size={20} className='icon'/> {isOpen && 'Prints'}</a>
                <a href='/Leads' > <FaPeopleGroup size={20} className='icon'/> {isOpen && 'Leads' }</a>
                <a href='/Sales' ><FaRegMoneyBill1 size={20} className='icon'/> {isOpen && 'Sales'}</a>
                <a href='/Products' ><BiSolidPhotoAlbum size={20} className='icon'/> {isOpen && 'Products'}</a>
                <a href='/SMS' ><FaCommentSms size={20} className='icon'/> {isOpen && 'SMS'}</a>
            </div>
           
        </div>
    )
}