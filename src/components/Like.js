import '../styles/Like.css'
import { useLikeAndDislikeMutation } from "../features/itinerariesApi"
import { useState } from "react"


export default function Like(props) {

    const [nroLike, setNrolike] = useState(props.itinerary.likes.length)

    let idItinerary = props.itinerary._id
    // console.log(idItinerary)

    let [likeAndDislike] = useLikeAndDislikeMutation()

    const clickLikeDislike = async (event) => {
        // console.log(event.target)
        if(localStorage.getItem('token')){
            try{
                let res =  await likeAndDislike(idItinerary)
                if(res.data?.succes){
                    // console.log("LIKE"+res.data)
                    setNrolike(nroLike + 1)
                }else {
                    // console.log("DISLIKE"+res.data)
                    setNrolike(nroLike - 1)
                }
            } catch (error){
                console.log(error)
            }
        }
    }

  return (
    <div >
        <button className="b" onClick={clickLikeDislike}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
            <p>
                {nroLike}
            </p>
        </button>
    </div>
  )
}
