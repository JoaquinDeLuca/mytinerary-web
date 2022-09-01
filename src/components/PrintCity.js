import "../styles/PrintCity.css"
import { Link as LinkRouter } from 'react-router-dom'

export default function AllCities(props) {
    let cities = props.data
    // console.log(cities)

    const showCities = (cities) => {
        return (
            <div className="PrintCity-container">
                <div className="PrintCity-Card">
                    <LinkRouter to={`/City?${cities._id}`} >
                        <img className="PrintCity-img" src={cities.photo} alt={cities.city} />
                    </LinkRouter>
                    <p className="PrintCity-name">{cities.city}</p>
                    {/* <p className="PrintCity-p">{cities.description}</p> */}
                </div>
            </div>
        )
    }

    return (
        <>
            {cities.map(showCities)}
        </>
    )
}
