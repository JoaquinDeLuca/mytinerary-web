import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import '../styles/NewItinerary.css'
import { usePostItineraryMutation } from '../features/itinerariesApi'
import NewActivity from '../components/NewActivity'
import '../styles/ActivityAnditinerary.css'

export default function NewItinerary() {

  // Id de la cuidad en la cual estoy
  let {id} = useParams()
  // console.log(id)

  let userId = useSelector(state => state.userr.id)
  // console.log(userId)

  let stateInicial = {
    name:"",
    user:"",
    city:"",
    price:"",
    duration:"",
  }

  const [itinerary, setItinerary] = useState(stateInicial)
  const [idItinerary, setIdItineray] = useState("")

  const [postItinerary] = usePostItineraryMutation()

  const captureData = (event) => {
    const {name, value}= event.target
    setItinerary({...itinerary, [name]: value })
  }
  // console.log(itinerary)

  const saveData = (event) => {
    event.preventDefault();

    const newitinerary = {
      name: itinerary.name,
      user: userId,
      city: id,
      price:itinerary.price,
      duration:itinerary.duration,
    }

    postItinerary(newitinerary)
    .then(response => setIdItineray(response.data.response._id))

  }


  return (
    <div className=''>
      <div className='form-conatiner'>
        <h1>New Itinerary</h1>

        <form onSubmit={saveData} className="form">
          <input onChange={captureData} placeholder='Name' name='name' className='input'/>
          <input onChange={captureData} placeholder='Price' name='price' className='input'/>
          <input onChange={captureData} placeholder='Duration' name='duration' className='input'/>
          <button className='button'>Send</button>
        </form>
      </div>
      <NewActivity id={idItinerary} />
    </div>
  )
}
