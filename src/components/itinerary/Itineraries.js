import '../../styles/Itinerary.css'
import Itinerary from './itineraries/Itinerary'
import { useGetItinerariesQuery } from '../../features/itinerariesApi'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Itineraries(props) {

    const id = props.data._id
    const name = props.data.city

    const { data: itineraries, isLoading } = useGetItinerariesQuery(id)

    if(isLoading){
        return(
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </div>
        )
    }

    return (
        <div className="Itinerary">
            {itineraries?.map(itineraries => <Itinerary key={itineraries._id} name={itineraries.name} data={itineraries} />)}
        </div>
    )
}
