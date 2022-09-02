import '../styles/Details.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {

  // Me traigo el id que pasa por URL, 
  let {id} = useParams()
  // console.log(`Este es: ${id}`)

  const [cities, setCities] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:4000/cities/${id}`)
        .then(response => setCities(response.data.response))
  },[id])

  
  const printDetails = (city) => {
    return(
      <div className="Details-container">
        <div className="Details-Card">
          <div className='Details-containerImg'>
            <img className="Details-img" src={city.photo} alt="img" />
          </div>
            <div className='Details-containe-p'>
              <h2 className="Details-h2">{city.city}</h2>
              <p className='Details-p'>Country: {city.country} </p>
              <p className='Details-p'>population: {city.population} </p>
              <p className='Details-p'>Fundation: {city.fundation} </p>
            </div>
        </div>
      </div>

    )
  }


  return (
    <>
      {printDetails(cities)}
    </>
  )
}
