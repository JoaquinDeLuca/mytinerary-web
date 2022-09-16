import PrintCity from "./PrintCity"
import { useState, useRef } from "react"
import '../styles/Allcity.css'
import { useGetAllCitiesQuery } from '../features/citiesApi'

export default function Allcity() {

  const searchInput = useRef()
  const [value, setValue] = useState("")
  const searchValue = () => {
    setValue(searchInput.current.value)
  }

  const {
    data: cities,
    error,
    isLoading,
    isSuccess,
    isFalied,
  } = useGetAllCitiesQuery(value)


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
