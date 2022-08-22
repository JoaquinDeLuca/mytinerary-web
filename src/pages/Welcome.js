import '../styles/Welcome.css'
import WebsiteLayouts from "../layouts/WebsiteLayouts"
import CarouselCities from '../components/CarouselCities'
import CalltoAction from '../components/CalltoAction'

export default function Welcome() {
  return (

    <WebsiteLayouts>

    <div className="Welcome-conatiner">
      <h1 className="Welcome-title">
        My Tinerary
      </h1>

      <p className='Welcome-slogan'>Find your perfect trip, designed by insiders who know and love their cities!</p>
    </div>
      <CalltoAction />
     <CarouselCities />
    </WebsiteLayouts>
  )
}
