import { useParams } from 'react-router-dom'
import '../styles/NewItinerary.css'

export default function NewItinerary() {
  let {id} = useParams()
  console.log(id)



  return (
    <div>
      <h1>New Itinerary</h1>
    </div>
  )
}
