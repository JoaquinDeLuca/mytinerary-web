import '../../../styles/Itinerary.css'
import Activities from "../Activities"
import Comments from "../Comments"
import Like from '../Like'


export default function Itinerary(props) {

    const itinerary = props.data

    return (
        <div className="Itinerary">
            <div className='ItineraryLine'></div>
            <h3 className="ItineraryTitle">{itinerary.name}</h3>
            <div className="itineraryLikeAndUser">
                <img className="itineraryImgUser" src={itinerary.user.photo} />
                <p className="itineraryUserName"> By {itinerary.user.name}</p>
                <Like itinerary={itinerary} />
            </div>
            <div className="Itinerary-ActivitiesContainer">
                <h3 className="Itinerary-ActivityTitle m-0 p-0">Activities</h3>
                <Activities data={itinerary} />
            </div>
            <div className='itineraryContainerComments'>
                <Comments data={itinerary}/>
            </div>
        </div>
    )
}
