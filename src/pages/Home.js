import CarouselCities from '../components/CarouselCities'
import CalltoAction from '../components/CalltoAction'
import Welcome from '../components/Welcome'

export default function Home() {
  const ButtonText = "Start"
  return (
    <>
      <Welcome />
      <CalltoAction linkTo='cities' btntext={ButtonText} />
      <CarouselCities />
    </>
  )
}
