import { usePostCommentMutation } from '../../features/commentsApi'
import { useEffect, useState } from 'react'
import { setCredentials, deleteCredentials } from '../../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSignInTokenMutation } from '../../features/userApi';

export default function CreateComment(props) {

    const dispatch = useDispatch()

    const [signInToken] = useSignInTokenMutation()

    const user = useSelector(state => state.userr)
    // const logged = useSelector(state => state.userr.logged)
    // console.log(user)
    const [newComment] = usePostCommentMutation()

    const itineraryId = props.data

    useEffect(() => {
        if (localStorage.getItem('token')) {
            verifyToken()
        }
    }, [])

    const verifyToken = async () => {
        try {
            await signInToken()
                .then(response => {
                    // console.log(response.data.succes)
                    if (response.data.succes)
                        dispatch(setCredentials(response.data.response.user))
                    else {
                        dispatch(deleteCredentials())
                        localStorage.removeItem('token')
                    }
                })
        } catch (error) {
            console.log(error)
            dispatch(deleteCredentials())
            localStorage.removeItem('token')
        }
    }


    const [message, setMessage] = useState({
        comment: "",
        user: "",
        itinerary: ""
    })

    const handleChange = event => {
        const { name, value } = event.target
        setMessage({ ...message, [name]: value })
    }

    const saveData = event => {
        event.preventDefault()
        const patchComment = {
            comment: message.comment,
            user: user.id,
            itinerary: itineraryId
        }
        newComment(patchComment)

        setMessage({
            comment: "",
            user: "",
            itinerary: ""
        })
    }


    return (
        <div className='Comment-form'>
            <form onSubmit={saveData} className='Comment-andButton'>
                <textarea name="comment" className='Comment-p' value={message.comment} onChange={handleChange} />
                <button className='Comment-Button'>Post</button>
            </form>
        </div>
    )

}