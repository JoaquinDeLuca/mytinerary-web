import Footer from "../components/Footer"

export default function WebsiteLayouts(props) {

  return (
    <>
        <div>Navbar ira el componente</div>
        <main>
        { props.children}
        </main>
        <Footer/>
    
    </>
  )
}
