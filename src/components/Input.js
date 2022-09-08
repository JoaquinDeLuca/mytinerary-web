import React, { useState } from 'react'
import '../styles/Input.css'
import { usePostNewCityMutation } from '../features/citiesApi'

export default function Input() {

    const [PostNew] = usePostNewCityMutation()

    const datosInicial ={
        city: "",
        country: "",
        photo: "",
        population: undefined,
        fundation: undefined,
        information: ""
    }

    const [city,setCity] = useState(datosInicial)

    const capturoData = (e)=>{
        const {name,value} = e.target
        setCity({...city, [name]: value})

    }

    

    const saveData = async(e)=>{
        e.preventDefault();
        // console.log(city);

        const newCity = {
            city: city.city,
            country: city.country,
            photo: city.photo,
            population: city.population,
            fundation: city.fundation,
            information: city.information
        }

        PostNew(newCity)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
        setCity({...datosInicial})
        e.target.reset()
    }
    
    

  return (
    <div className='Input-Container'>
        <h2 className='Input-h2'>NewCity</h2>
        <form onSubmit={saveData} className='Input-Containerbox' >
            <input className='Input-input' name="city" type="text" placeholder="City" value={city.city} onChange={capturoData} required />
            <input className='Input-input' name="country" type="text" placeholder="Country" value={city.country} onChange={capturoData} required/>
            <input className='Input-input' name="photo" type="text" placeholder="Photo"  value={city.photo} onChange={capturoData} required/>         
            <input className='Input-input' name="population" type="number" placeholder="Population" value={city.population} onChange={capturoData} required/>
            <input className='Input-input' name="fundation" type="text" placeholder="Fundation" value={city.fundation} onChange={capturoData} required/>
            <input className='Input-input' name="information" type="text" placeholder="information" value={city.information} onChange={capturoData} required />
            <button className='Input-button'>Send</button>
        </form>
    </div>
  )
}



// import { useRef } from "react"


// export default function Input() {
//     const inputRef = useRef(null)
//     const inputRef2 = useRef(null)
//     const inputRef3 = useRef(null)
//     const inputRef4= useRef(null)
//     const inputRef5= useRef(null)
    
//     const pintar = (e) =>{
//     e.preventDefault()
//     console.log("city: " + inputRef.current.value);
//     console.log(inputRef2.current.value);
//     console.log(inputRef3.current.value);
//     console.log(inputRef4.current.value);
//     console.log(inputRef5.current.value);
// }

// return (
//     <div>
//         <form ref={inputRef}>
//         <input name="city" type="text" placeholder="city" ref={inputRef} />
//         <input name="country" type="text" placeholder="country" ref={inputRef2} />
//         <input name="photo" type="text" placeholder="photo" ref={inputRef3}></input>
//         <input name="population" type="number" placeholder="population" ref={inputRef4}></input>
//         <input name="fundation" type="text" placeholder="fundation" ref={inputRef5}></input>
//         <button onClick={pintar} >Send</button>
//         </form>
//     </div>
//     )
//     }   



 
// export default function Input(props) {

// const info = props.data

// const inputview = (info)=>(
//     <div>
//         <input name={info.dato} type={info.tipo} placeholder={info.dato}></input>
//     </div>
// )

// const HandleSubmit= (event)=>{
//     event.preventDefault();
// };

// return (
//     <div>
//         <form>
//         {info.map(inputview)} 
//         <button >Send</button>
//         </form>
//     </div>
// )
// }


