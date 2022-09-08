import '../styles/Activities.css'
import axios from "axios"
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

export default function Activities(props) {

    const id = props.data._id
    const [activities, setActivity] = useState([])
    // console.log(id)


    useEffect(() => {
        axios.get(`http://localhost:4000/activities/itinerary/${id}`)
            .then(response => setActivity(response.data.response))
    }, [id])

    // console.log(activities)

    const showActivities = (activities) => {
        return (
            <div className="Activity-Container">
                <div className='Activity-ContainerImg' >
                    <img className='Activity-Img' src={activities.photo} />
                </div>
                <h4 className='Activity-Title' >{activities.name}</h4>
            </div>
        )
    }


    return (
        <div className='Activity' >
            {activities?.map(showActivities)}
        </div>
    )
}