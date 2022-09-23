import '../styles/Itinerary.css'
import Activities from "./Activities"
import Comments from "./Comments"
import { useGetItinerariesQuery } from '../features/itinerariesApi'
import Like from './Like'


export default function Itinerary(props) {

    const id = props.data._id
 
    const {
        data: itineraries,
        
    } = useGetItinerariesQuery(id)
    
    const showItineraries = (itineraries) => {

    
        return (
            <>

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
                                <Like itinerary={itineraries}   />
                            </div>
                            <div className="Itinerary-ActivitiesContainer">
                                <h3 className="Itinerary-ActivityTitle">Activities:</h3>
                                <Activities data={itineraries} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Comments data={itineraries}/>
            </>
        )
    }


    return (
        <div className="Itinerary">
            {itineraries?.map(showItineraries)}
        </div>
    )
}
