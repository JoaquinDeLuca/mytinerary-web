import '../styles/Itinerary.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import Activities from "./Activities"
// import { useParams } from 'react-router-dom'

export default function Itinerary(props) {

    const id = props.data._id
    const [itineraries, setItinerary] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:4000/itineraries/city/${id}`)
            .then(response => setItinerary(response.data.response))
    }, [id])

    // console.log(itineraries)

    const showItineraries = (itineraries) => {
        return (
            <div className="Itinerary-Container">
                <div className="Itinerary-ImgContainer">
                    <img className="Itinerary-Img" src={itineraries.city.photo} />
                </div>
                <div className="Itinerary-InformationContainer">
                    <h3 className="Itinerary-Title">{itineraries.name}</h3>
                    <div className="Itinerary-Information">
                        <div className="Itinerary-Section">
                            <div className="Itinerary-User">
                                <img className="Itinerary-ImgUser" src={itineraries.user.photo} />
                                <p className="Itinerary-UserName"> By {itineraries.user.name}</p>
                            </div>
                            <div className="Itinerary-ActivitiesContainer">
                                <h3 className="Itinerary-ActivityTitle">Activities:</h3>
                                <Activities data={itineraries} />
                            </div>
                        </div>
                        <div className="Itinerary-CommentsContainer"></div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="Itinerary">
            {itineraries?.map(showItineraries)}
        </div>
    )
}
