import {GoHome, GoHomeFill, GoSearch} from 'react-icons/go' 
import {FaRegCompass,FaCompass} from 'react-icons/fa' 
import {CgClapperBoard} from 'react-icons/cg'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiPlusSquare} from 'react-icons/fi'
const Navbar = () => {
    return <nav className='w-1/6 border-r h-screen'>
        <GoHome/>
        <GoSearch/>
        <FaRegCompass/>
        <CgClapperBoard/>
        <RiMessengerLine/>
        <AiOutlineHeart/>
        <FiPlusSquare/>
    </nav>
}

export default Navbar