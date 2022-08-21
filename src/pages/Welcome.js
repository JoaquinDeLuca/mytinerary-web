import '../styles/Welcome.css'
import WebsiteLayouts from "../layouts/WebsiteLayouts"


export default function Welcome() {
  return (

    <WebsiteLayouts>
    <div className="Welcome-conatiner">
      <h1 className="Welcome-title">
        My Tinerary
      </h1>

      <p className='Welcome-slogan'>Find your perfect trip, designed by insiders who know and love their cities!</p>
    </div>
    </WebsiteLayouts>
  )
}
