import Footer from "../components/Footer"
import '../styles/WebsiteLayouts.css'

export default function WebsiteLayouts(props) {

  return (
    <>
      <div>Navbar ira el componente</div>
      <main>
        {props.children}
      </main>
      <Footer />

    </>
  )
}
