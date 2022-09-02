import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Header.css'
import acceso from '../img/acceso.png';
import logo3 from '../img/logo3.png';
import lista from '../img/lista.png'
import { useState } from 'react'

const pages = [
    { name: 'Home', to: '/' },
    { name: 'Cities', to: '/cities' },
    { name: 'New City', to: '/newcity' },
]


export default function Header() {
    const [menu, setMenu] = useState(false)
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }
    const link = (page) => <li onClick={toggleMenu}><LinkRouter className='Header-link' to={page.to}>{page.name}</LinkRouter></li>

    const HandleOpen = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <header className={`${menu ? 'HeaderisActive' : ''} `}>
            <LinkRouter to="/">
                <img className='Header-logo' src={logo3} alt='logo' />
            </LinkRouter>
            <div className='Header-NavContainer'>
                <nav className={`Header-nav ${menu ? 'isActive' : ''} `}>
                    <div className='Header-Backgound'>&nbsp;</div>
                    <ul className='Header-LinksContainer'>
                        {pages.map(link)}
                    </ul>
                </nav>
                <div>
                    <div className='Header-menu'>
                        {
                            open
                                ? <ul className='Header-profileMenu'>
                                    <li className='Header-li'>Sign up</li>
                                    <li className='Header-li'>Sign in</li>
                                </ul>
                                : null
                        }
                    </div>
                    <button className='Header-button' onClick={HandleOpen}><img className='Header-login' src={acceso} alt='acceso' /></button>
                </div>
                <button className='Header-NavMenuButton' onClick={toggleMenu}>
                    <img className='Header-NavMenuIcon' src={lista} alt='logo' />
                </button>
            </div>
        </header>
    )
}




