import "../styles/Carousel.css"
import Arrow from "./carousel/Arrow"
import {useEffect,useState} from "react"

export default function Carousel(props) {

    const range = props.range
    const cities = props.data
    const limitSlides = props.slides * range
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const interval = props.interval * 1000

    const citiesView = (cities) => (
        <div className="Carousel-cities">
            <img className="Carousel-img" src={cities.url} alt={cities.city} />
            <p className="Carousel-citiesName">{cities.city}</p>
        </div>
    )

    useEffect( () => {
        let id = setInterval( () => {
            next()
        }, interval)

        setIntervalId(id)

        return () => clearInterval(intervalId)
    },[start])



    const previous = () => {
        if (start >= range){
            setStart(start - range)
            setEnd(end - range)
        }else {
            setStart(limitSlides - range)
            setEnd(limitSlides)
        }
        clearInterval(intervalId)
    }

    const next = () =>{
        if (end < cities.length){
            setStart(start + range)
            setEnd(end + range)
        }else {
            setStart(0)
            setEnd(range)
        }
        clearInterval(intervalId)
    }

    console.log("Start: " + start)
    console.log("End: " + end)

    return (

        <div className="Caorusel">
            <Arrow icon={"⇜"} click={previous} />
            <div className="Carousel-container">
                {cities.slice(start, end).map(citiesView)}
            </div>
            <Arrow icon={"⇝"} click={next} />
        </div>
    )
}
