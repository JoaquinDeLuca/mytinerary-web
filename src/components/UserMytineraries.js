import axios from "axios"
import { useGetItinerariesByUserQuery } from '../features/itinerariesApi'
import { useState } from "react"
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function UserMytineraries() {

    let user = useSelector(state => state.userr)

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
    // For Edit Inerary
    const editItnerary = (id) => {
    }

    // For Delete Itnerary
    const deleteItinerary = (id) => {

        axios.delete(`http://localhost:4000/itineraries/${id}`)
        .then(response => console.log(response.data.response))

        window.location.replace('/mytineraries')
    }

    const {
        data: itinerary,
    } = useGetItinerariesByUserQuery(user.id)
    // console.log(itinerary)
    
    
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
