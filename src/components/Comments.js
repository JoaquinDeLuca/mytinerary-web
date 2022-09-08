import '../styles/Comments.css'
import axios from "axios"
import { useEffect, useState } from 'react'


export default function Comments(props) {

    const id = props.data._id
    const [comments, setComments] = useState([])

    const [open,setOpen] = useState(false)

    const HandleOpen = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }


    useEffect(()=>{
        axios.get(`http://localhost:4000/comments/itinerary/${id}`)
        .then(response => setComments(response.data.response))
    },[id])

// console.log(comments)


const showComments = (comment)=>{
  return (
    <div className='Comment-container'>
        <div className='Comment-user'>
            <div className='Comment-containerimg'>
                <img className='Comment-img' src={comment.user.photo} />
            </div>
            <p>{comment.user.name}</p>
        </div>
        <div className='Comment-p'>
            <p>{comment.comment}</p>
        </div>
    </div>

  )
}



return(

        <div className='Comment-full'>
            <h3 className='Comment-h3' onClick={HandleOpen} >Comments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></h3>
            <div className="Comment-Container2">
                {
                open
                    ?  comments.map(showComments) :null
                }
            </div>
        </div>
    )

}