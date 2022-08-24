import "../styles/AllCities.css"

export default function AllCities(props) {
    let cities = props.data
    // console.log(cities)
     
    const showCities = (cities) => {
        return (
            <div className="AllCities-container">
                <img className="AllCities-img" src={cities.url} alt={cities.city}/>
                <p className="AllCities-name">{cities.city}</p>
            </div>
        )
    }

  return (
    <div>
        {cities.map(showCities)}
    </div>
  )
}
