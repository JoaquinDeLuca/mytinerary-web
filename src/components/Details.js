import '../styles/Details.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function Details() {

  
  // Con el meteodo window... me traigo el id que pasa por URL
  let id = window.location.search
  // let {id} = useParams()
  // console.log(`Este es: ${id}`)

  // console.log(useParams())
  // let idClean = id.slice(1)
  // console.log(idClean)
  

  const [cities, setCities] = useState([])
  
  useEffect(() => {
    const obtenerDatos = () =>  {
      axios.get(api + `/cities/${id}`)
        .then(response => setCities(response.data))
    }
    obtenerDatos()
  },[id])

  
  // let cityid = cities.find( city => city._id === id)
  // console.log(cityid)




  // const printDetails = (cityid) => {
  //   return(
  //     <div className="Details-container">
  //       <div className="Details-Card">
  //         <div>
  //           <img className="Details-img" src={cityid.photo} alt="img" />
  //         </div>
  //           <div className='Details-containe-p'>
  //             <p className="Details-p">City:{cityid.city}</p>
  //             <p className='Details-p'>Country:{cityid.country} </p>
  //             <p className='Details-p'>population:{cityid.population} </p>
  //             <p className='Details-p'>Fundation:{cityid.fundation} </p>
  //           </div>
  //       </div>
  //     </div>

  //   )
  // }


  return (
    <>
      {/* {printDetails(cityid)} */}
      <div className="Details-container">
        <div className="Details-Card">
          <div>
            <img className="Details-img" src={cities.photo} alt="img" />
          </div>
            <div className='Details-containe-p'>
              <p className="Details-p">City:{cities.city}</p>
              <p className='Details-p'>Country:{cities.country} </p>
              <p className='Details-p'>population:{cities.population} </p>
              <p className='Details-p'>Fundation:{cities.fundation} </p>
            </div>
        </div>
      </div>
    </>
  )
}
