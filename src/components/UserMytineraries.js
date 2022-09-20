import axios from "axios"
import { useGetItinerariesByUserQuery } from '../features/itinerariesApi'
import { useState } from "react"
import { Link as LinkRouter, useNavigate } from 'react-router-dom'

export default function UserMytineraries() {

    const navigate = useNavigate()

    let user = JSON.parse(localStorage.getItem('useriInfo'))
    const [reload, setReoload] = useState(false)
    // console.log(user)

    // let itinerary = [
    //     {
    //         name: "View of roma",
    //         user:"6312d4360f07f1980c45cf3a", 
    //         city:"630ef554a3889f89c52ef423",
    //         price:"25",
    //         likes:[1],
    //         tags:[1],
    //         duration:"3",
    //     },
    //     {
    //         name: "Visit Madrid",
    //         user:"6312d4360f07f1980c45cf3a", 
    //         city:"630ef554a3889f89c52ef422", 
    //         price:"25",
    //         likes:[4],
    //         tags:[2],
    //         duration:"2",
    //     },
    //     {
    //         name: "Visit venice",
    //         user:"6312d4360f07f1980c45cf3a", 
    //         city:"630ef554a3889f89c52ef424", 
    //         price:"25",
    //         likes:[2],
    //         tags:[2],
    //         duration:"1",
    //     },
    //     {
    //         name: "Visit Brussels",
    //         user:"6312d4360f07f1980c45cf3a",
    //         city:"630ef554a3889f89c52ef425", 
    //         price:"25",
    //         likes:[2],
    //         tags:[2],
    //         duration:"1",
    //     },
    //     {
    //         name: "london Riverside of the Thames",
    //         user:"6312d4360f07f1980c45cf3a", 
    //         city:"630ef554a3889f89c52ef428", 
    //         price:"25",
    //         likes:[1],
    //         tags:[2],
    //         duration:"2",
    //     },
    // ]
     
    const showItineraries = (itinera) => {
        return (
            <div className='MyTineraries-itneraries'>
                <p>City: {itinera.city.city}</p>
                <p>Name: {itinera.name}</p>
                <p>Duration: {itinera.duration} days</p>
                <div className="container-btn">
                <LinkRouter className="buttom-link" to={`/itineraries/${itinera._id}`}>Edit</LinkRouter>
                <button className="buttom"  onClick={ () => deleteItinerary(itinera._id)}>Delete</button>
                </div>
            </div>

        )
    }
    // Para edit inerary
    const editItnerary = (id) => {
    }



    // Para borrar itnerary
    const deleteItinerary = (id) => {

        axios.delete(`http://localhost:4000/itineraries/${id}`)
        .then(response => console.log(response.data.response))

        window.location.replace('/mytineraries')
    }

    const {
        data: itinerary,
        
    } = useGetItinerariesByUserQuery(user.id)
    console.log(itinerary)
    
    
  return (
    <div>
        <LinkRouter to='/'><button className='MyTineraries-btn'>Back</button></LinkRouter>
        <h2 className='MyTineraries-h2'>MyTineraries</h2>
        <div className='MyTineraries-container'>
        <h4 className='MyTineraries-h4'>User: {user.name}</h4>
            {itinerary?.map(showItineraries)}
        </div>
    </div>
  )
}
