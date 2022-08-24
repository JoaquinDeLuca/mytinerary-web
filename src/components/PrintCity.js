import "../styles/PrintCity.css"

export default function AllCities(props) {
    let cities = props.data
    // console.log(cities)
     
    const showCities = (cities) => {
        return (
            <div className="PrintCity-container">
                <img className="PrintCity-img" src={cities.url} alt={cities.city}/>
                <p className="PrintCity-name">{cities.city}</p>
            </div>
        )
    }

  return (
    <div>
        {cities.map(showCities)}
    </div>
  )
}
