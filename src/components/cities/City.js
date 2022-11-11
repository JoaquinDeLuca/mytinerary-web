import "../../styles/PrintCity.css"
import { Link as LinkRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export default function City(props) {
    let cities = props.data

    return (
        <>
            <div className="cityContainerCard">
                <LinkRouter className="PrintCity-link" to={`/city/${cities._id}`} >
                    <Card className="bg-dark text-white cityCard shadow-lg rounded-1">
                        <Card.Img className="cityImg" src={cities.photo} alt={cities.city} />
                        <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center  m-auto cardImgOverlay">
                            <Card.Title>{cities.city}</Card.Title>
                            <Card.Text className="m-0 m-md-1">{cities.country}</Card.Text>
                            <Card.Text className="d-md-none ">Population: {cities.population}</Card.Text>
                            <Card.Text className="d-none d-md-block text-center">{cities.information}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </LinkRouter>
            </div>
        </>
    )
}
