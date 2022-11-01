import Carousel from 'react-bootstrap/Carousel';
import '../../styles/Carousel.css'

function carousel(props) {

    let cities = props.data
    console.log(cities)

    const showCities = (city) => {
        return (
            <Carousel.Item className='bg-transparent' key={city._id} interval={1000}>
                <img
                    className="carouselImg"
                    src={city.photo}
                    alt={city.city}
                />
                <Carousel.Caption>
                    <h3>{city.city}</h3>
                    <p className='d-none d-sm-block'>{city.information}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }

  return (
    <div className='carouselDiv'>
        <Carousel className='carouselItem'>
            {cities?.map(showCities)}
        </Carousel>
    </div>
  );
}

export default carousel;