import PrintCity from "./PrintCity"
import axios from "axios"
import { useEffect, useState, useRef } from "react"
import '../styles/Allcity.css'
import api from '../api'

export default function Allcity() {
  // const cities = [
  //     { url: "https://c4.wallpaperflare.com/wallpaper/662/782/517/obelisco-de-buenos-aires-argentina-buenos-aires-city-wallpaper-preview.jpg" , city: "Buenos Aires" , description:"Its cultural facet is reflected in the large number and variety of museums, theaters, art galleries and libraries."},
  //     { url: "https://images2.alphacoders.com/946/946722.jpg" , city: "Rio de Janeiro", description:"World-renowned for the statue of Christ the Redeemer, the Sugar Loaf, the extraordinary beaches of Copacabana and Ipanema, the Tijuca National Park, the Maracana stadium, its famous carnivals."},
  //     { url: "https://images5.alphacoders.com/815/815875.jpg" , city: "Madrid", description:"Capital of Spain and commonly known as Villa y Corte, Madrid is the largest city in the country and the second largest in the European Union, with a population of more than 3 million inhabitants"},
  //     { url: "https://fondosmil.com/fondo/60652.jpg" , city: "Rome", description:"Rome is an Italian city, capital of the Lazio region and of Italy. With a population of 2,815,951 inhabitants, it is the most populous municipality in Italy and the third most populous city in the European Union.​"},
  //     { url: "https://w0.peakpx.com/wallpaper/647/346/HD-wallpaper-venice-italy-landscape-graphy.jpg" , city: "Venice", description:"Located in a marshy lagoon in the Adriatic Sea, between the mouths of the Po and Piave rivers, the city of Venice is made up of 120 small islands, connected to each other by hundreds of bridges, rivers and canals."},
  //     { url: "https://p4.wallpaperbetter.com/wallpaper/221/423/653/cities-brussels-belgium-grand-palace-wallpaper-preview.jpg" , city: "Brussels", description:"Located in a marshy lagoon in the Adriatic Sea, between the mouths of the Po and Piave rivers, the city of Venice is made up of 120 small islands, connected to each other by hundreds of bridges, rivers and canals."},
  //     { url: "https://i0.wp.com/laderasur.com/wp-content/uploads/2017/06/Captura-de-pantalla-2017-06-02-a-las-14.32.14.jpg?ssl=1" , city: "Santiago de chile", description:"Santiago is the political and social capital of Chile, where more than 7 million people live together in an environment that mixes history and modernity. It is surrounded by two mountain ranges, which make it a unique city in the world."},
  //     { url: "https://media.istockphoto.com/photos/panoramic-aerial-view-of-miraflores-town-in-lima-peru-picture-id992182190?k=20&m=992182190&s=612x612&w=0&h=KuLYAWsPmy9a8oyDcvRToYJNhx1KxurCniF5Uj1erh0=" , city: "Lima" , description:"It is located on the central coast of the country, on the shores of the Pacific Ocean, forming an extensive and populous urban area known as Metropolitan Lima, flanked by the coastal desert and extending over the valleys of the Chillón, Rímac and Lurín rivers."},
  //     { url: "https://fondosmil.com/fondo/15090.jpg" , city: "London", description:"This emblematic city is located in the southeast of England, right on the two banks of the River Thames. Founded as Londinium in the year 43, it is one of the most populated cities in Europe, and we would say that in the world."},
  //     { url: "https://p4.wallpaperbetter.com/wallpaper/451/971/669/cardiff-castle-in-wales-wallpaper-preview.jpg" , city: "Cardiff", description:"Cardiff (Caerdydd in Welsh) is the capital of Wales and its largest city, as well as the most important commercial, cultural, sports, educational and media center in the country."},
  //     { url: "https://p4.wallpaperbetter.com/wallpaper/526/773/141/bridge-river-boats-portugal-wallpaper-preview.jpg" , city: "Porto", description:"Porto is the second largest and most populous city in Portugal after Lisbon, with nearly 250,000 inhabitants in its urban center and one and a half million in its metropolitan area."},
  //     { url: "https://images6.alphacoders.com/703/thumb-1920-703494.jpg" , city: "Paris", description:"A splendid, vibrant city, a city of fashion and great gourmets, a city of wide avenues and splendor squares, monuments and historic buildings, the best museums"},
  // ]


  // const [cities, setCities] = useState([])
  const URL = api + '/cities?city='
  const searchInput = useRef()
  // const [value, setValue] = useState("")
  const searchValue = () => {
    // setValue(searchInput.current.value)
    console.log(searchInput.current.value)
  }

  // useEffect(() => {
  //   axios.get(URL + searchInput.current.value)
  //     .then(response => setCities(response.data))
  //     .catch(error => console.log(error))
  // }, [value])


  const {
    data : cities,
    error,
    isLoading,
    isSuccess,
    isFalied,
  } = useGetAllCitiesQuery()



  return (
    <>
     <div className="Allcity-container">
        <div className="Allcity-divInput">
          <input className="Allcity-input" name="text" type="text" placeholder="Find city:" ref={searchInput} onChange={searchValue} />
        </div>
        <div className="Allcity-Printcity">
          <PrintCity data={cities} />
        </div>
      </div>
    </>
  )
}
