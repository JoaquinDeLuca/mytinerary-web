import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className='Footer-container'>
      <div className='Footer-web'>
        <a href="https://www.facebook.com/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/SN2Wsgx/facebook.png" /></a>
        <a href="https://www.instagram.com/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/7ghYMbs/instagram.png" /></a>
        <a href="https://web.telegram.org/" target="_blank" className='Footer-link'><img className='Footer-icon' src="https://i.ibb.co/X7X4Xyx/telegram.png" /></a>
      </div>
      <div className='Footer-copyright'>
        <p>  Mytinerary | © 2022</p>
        <p> Ojeda | De Luca | Ochoa</p>
      </div>
    </footer>
  )
}
