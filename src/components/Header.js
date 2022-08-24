import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css'
import acceso from '../img/acceso.png';
import logo3 from '../img/logo3.png';
import {useState} from 'react'

const pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New City', to: '/newcity'},
]

const link = (page)=><LinkRouter className='Header-link' to={page.to}>{page.name}</LinkRouter>

export default function Header() {

const [open, setOpen] = useState(false)

const HandleOpen = ()=>{
    if(open){
        setOpen(false)
    } else{
        setOpen(true)
    }
}
 
    return(
        <header>
            <img className='Header-logo' src={logo3} alt='logo'/>
            <nav>
                {pages.map(link)}
            </nav>
            <div>
                <div className='Header-menu'>
                {
                    open 
                        ? <ul>
                            <li className='Header-li'>Sign up</li>
                            <li className='Header-li'>Sign in</li>
                        </ul> 
                        : null 
                }
                </div>
                <button className='Header-button' onClick= {HandleOpen}><img className='Header-login' src={acceso} alt='acceso'/></button>
            </div> 
        </header>
    )
}




