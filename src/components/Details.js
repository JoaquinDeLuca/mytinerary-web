import '../styles/Details.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { Link as LinkRouter } from 'react-router-dom'
import Itineraries from './itinerary/Itineraries'
import { useSelector } from 'react-redux'

export default function Details() {

  let { id } = useParams()

  const logged = useSelector(state => state.userr.logged)
  const role = useSelector(state => state.userr.role)
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get(api + `/cities/${id}`)
      .then(response => setCities(response.data.response))
  }, [id])

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const userlogic = () => {
    if (logged) {
      if (role === "admin") {
        return (
          <>
            <LinkRouter className='Details-boton' to={'/editcity/' + id}>Edit City</LinkRouter>
            <LinkRouter className='Details-boton' to={'/newitinerary/' + id}>New Itinerary</LinkRouter>
          </>
        )
      } else {
        return (
          <>
            <LinkRouter className='Details-boton' to={'/newitinerary/' + id}>New Itinerary</LinkRouter>
          </>
        )
      }
    } else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <>
      <div className='Details'>
        <img className="Details-img" src={cities.photo} alt="img" style={{ transform: `translateY(${offset * .5}px)`, }} />
        <div className='Details-containe-p'>
          <p className='Details-p country'>{cities.country} </p>
          <h2 id="Detaials-h2">{cities.city}</h2>
          <p className='Details-p'>{cities.information} </p>
          {/* {userlogic()} */}
        </div>
      </div>
      <div className='ItinerariesContainer'>
        <h2>Itineraries of {cities.city}</h2>
        <Itineraries data={cities} />
      </div>
    </>
  )
}
