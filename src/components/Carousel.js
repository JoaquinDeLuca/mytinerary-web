import "../styles/Carousel.css"

export default function Carousel(props) {

    const range = props.range
    const start = 0
    const end = start + range

    const cities = props.data

    const citiesView = (cities) => (
        <div className="Carousel-cities">
            <img className="Carousel-img" src={cities.url} alt={cities.city} />
            <p className="Carousel-citiesName">{cities.city}</p>
        </div>
    )
    return (

        <div>
            <div className="Carousel-container">
                {cities.slice(start, end).map(citiesView)}
            </div>


        </div>
    )
}
