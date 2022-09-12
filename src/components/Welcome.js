import '../styles/Welcome.css'
import agua from '../assets/parallax/agua.png'
import fondo from '../assets/parallax/fondo.png'
import frente from '../assets/parallax/frente.png'
import nubes from '../assets/parallax/nubes.png'
import sol from '../assets/parallax/sol.png'
import palmeras from '../assets/parallax/palmeras.png'
import { useState, useEffect } from 'react'

export default function Welcome() {






  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <div className="Welcome-conatiner">
      <img className='Parallax-fondo' src={fondo} alt='' />
      <img className='Parallax-sol' src={sol} alt='' style={{ transform: `translateY(${offset * 0.13}px)`, }} />
      <img className='Parallax-nubes' src={nubes} alt='' />
      <img className='Parallax-agua' src={agua} alt='' />
      <img className='Parallax-palmeras' src={palmeras} alt='' />
      <div className='Welcome-text' style={{ transform: `translateY(${offset * 0.3}px)`, overflow: `hidden`, }}>
        <p className='Welcome-trips'>Trips</p>
        <h1 className="Welcome-title">MyTinerary</h1>
        <p className='Welcome-slogan'>Find your perfect trip, designed by insiders who know and love their cities!</p>
      </div>
      <img className='Parallax-frente' src={frente} alt='' />
    </div>
  )
}
