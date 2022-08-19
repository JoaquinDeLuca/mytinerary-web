import Footer from "../components/Footer"

export default function WebsiteLayouts(props) {

  return (
    <>
        <div>Navbar ira el componente</div>
        { props.children}
        <Footer/>
    
    </>
  )
}
