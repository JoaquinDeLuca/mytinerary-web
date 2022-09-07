import '../styles/MyTineraries.css'

export default function MyTineraries() {
    let itinerary = [
        {
            name: "View of roma",
            user:"6312d4360f07f1980c45cf3a", 
            city:"630ef554a3889f89c52ef423",
            price:"25",
            likes:[1],
            tags:[1],
            duration:"3",
        },
        {
            name: "Visit Madrid",
            user:"6312d4360f07f1980c45cf3a", 
            city:"630ef554a3889f89c52ef422", 
            price:"25",
            likes:[4],
            tags:[2],
            duration:"2",
        },
        {
            name: "Visit venice",
            user:"6312d4360f07f1980c45cf3a", 
            city:"630ef554a3889f89c52ef424", 
            price:"25",
            likes:[2],
            tags:[2],
            duration:"1",
        },
        {
            name: "Visit Brussels",
            user:"6312d4360f07f1980c45cf3a",
            city:"630ef554a3889f89c52ef425", 
            price:"25",
            likes:[2],
            tags:[2],
            duration:"1",
        },
        {
            name: "london Riverside of the Thames",
            user:"6312d4360f07f1980c45cf3a", 
            city:"630ef554a3889f89c52ef428", 
            price:"25",
            likes:[1],
            tags:[2],
            duration:"2",
        },
    ]

    const showItineraries = (itinera) => {
        return (
            <div className='MyTineraries-itneraries'>
                <p>Name: {itinera.name}</p>
                <p>Duration: {itinera.duration} days</p>
            </div>

        )
    }


  return (
    <>
        <button className='MyTineraries-btn'>Back</button>
        <h2 className='MyTineraries-h2'>MyTineraries</h2>
        <div className='MyTineraries-container'>
        <h4 className='MyTineraries-h4'>User: Aguh</h4>
            {itinerary.map(showItineraries)}
        </div>
    </>
  )
}
