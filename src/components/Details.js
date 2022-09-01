import '../styles/Details.css'
import axios from "axios"
import { useEffect, useState } from 'react'

export default function Details() {

  
  // Con el meteodo window... me traigo el id que pasa por URL
  let id = window.location.search

  let idClean = id.slice(1)
  // console.log(idClean)
  
  const [cities, setCities] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4000/cities')
      .then(response => setCities(response.data))

  },[])
  let cityid = cities.find( city => city._id === idClean)
  // console.log(cityid)


  const printDetails = (cityid) => {
    return(
      <div className="Details-container">
        <div className="Details-Card">
          <div>
            <img className="Details-img" src={cityid.photo} alt="img" />
          </div>
            <div className='Details-containe-p'>
              <p className="Details-p">City:{cityid.city}</p>
              <p className='Details-p'>Country:{cityid.country} </p>
              <p className='Details-p'>population:{cityid.population} </p>
              <p className='Details-p'>Fundation:{cityid.fundation} </p>
            </div>
        </div>
      </div>

    )
  }


  return (
    <>
      {/* {printDetails(cityid)} */}
    </>
  )
}
