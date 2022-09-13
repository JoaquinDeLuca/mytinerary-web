import { useState } from 'react'
import { usePostUserMutation } from '../features/userApi'
import '../styles/SingUpInput.css'

export default function SingUpInput() {

    const [newUser] = usePostUserMutation()

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        mail: "",
        password: "",
        photo: "",
        country: "",
        role:'user', 
        from:'form'
    })

    const captureData = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }
    // console.log(form)
    
    const saveData = (event) => {
        event.preventDefault()

        const userData = {
            name: form.name,
            lastName: form.lastName,
            mail: form.mail,
            password: form.password,
            photo: form.photo,
            country: form.country,
            role:'user', 
            from:'form'
        }
        newUser(userData)
        event.target.reset()
        // console.log(form)
    }



  return (
    <div className="Singup-container">
        <form className="Singup-form" onSubmit={saveData}>
            <input onChange={captureData} name="name"      className="Singup-input" placeholder="Name"/>
            <input onChange={captureData} name="lastName"  className="Singup-input" placeholder="LastName"/>
            <input onChange={captureData} name="mail"      className="Singup-input" placeholder="Mail"/>
            <input onChange={captureData} name="password"  className="Singup-input" placeholder="Password"/>
            <input onChange={captureData} name="photo"     className="Singup-input" placeholder="Photo URL"/>
            <input onChange={captureData} name="country"   className="Singup-input" placeholder="Conuntry"/>
            <button className="Singup-btn">Sign Up</button>
        </form>
    </div>
  )
}
