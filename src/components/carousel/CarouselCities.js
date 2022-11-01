import Carousel from "./Carousel"
import { useGetAllCitiesQuery } from '../../features/citiesApi'
import Spinner from 'react-bootstrap/Spinner';


export default function CarouselCities() {

  const initialCity = 0
  const endCity = 12

  const { data: cities, isLoading } = useGetAllCitiesQuery([])

  const loadindg = () =>{
  }
  
  if (isLoading){
    return (
      <div className="d-flex justify-content-center">
         <Spinner animation="border" role="status"></Spinner>
      </div>
    )
  }

  return (
    <div>
      <Carousel data={cities?.slice(initialCity, endCity)} />
    </div>
  )
}
