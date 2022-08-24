import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Footer() {

  const [actualYear, setDate] = useState(null)

  useEffect(() => {
    let today = new Date()
    let actualYear = today.getFullYear()
    setDate(actualYear)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <footer className='Footer-container'>
      <div className='Footer-web'>
        <a href="https://www.facebook.com/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/SN2Wsgx/facebook.png" alt='facebook' /></a>
        <a href="https://www.instagram.com/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/7ghYMbs/instagram.png" alt='instagram' /></a>
        <a href="https://web.telegram.org/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/X7X4Xyx/telegram.png" alt='telegram' /></a>
      </div>
      <div className='Footer-copyright'>
        <p>  Mytinerary | © {actualYear}</p>
        <p>
          <a href="https://github.com/NicoOjeda" target="_blank" className='Footer-github'>Ojeda</a> | <a href="https://github.com/JoaquinDeLuca" target="_blank" className='Footer-github'>De Luca</a> | <a href="https://github.com/LilAguh" target="_blank" className='Footer-github'>Ochoa</a>
        </p>
      </div>
      <div className='Footer-nav'>
        <LinkRouter className="Footer-navLink" to="/cities">Cities</LinkRouter>
        <LinkRouter className="Footer-navLink" to="/newcity">New City</LinkRouter>
      </div>
      <button onClick={scrollToTop} className="Footer-scroll">&#8679;</button>
    </footer>
  )
}
