import "../styles/PrintCity.css"

export default function AllCities(props) {
    let cities = props.data
    // console.log(cities)
     
    const showCities = (cities) => {
        return (
            <div className="PrintCity-container">
                <div className="PrintCity-Card">
                    <img className="PrintCity-img" src={cities.url} alt={cities.city}/>
                    <p className="PrintCity-name">{cities.city}</p>
                    <p className="PrintCity-p">{cities.description}</p>
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
