import CarouselCities from '../components/CarouselCities'
import CalltoAction from '../components/CalltoAction'
import WebsiteLayouts from "../layouts/WebsiteLayouts"
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <WebsiteLayouts>
      <Welcome />
      <CalltoAction />
      <CarouselCities />
    </WebsiteLayouts>
  )
}
