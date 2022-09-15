import * as jose from 'jose'
import { useEffect, useRef, useState } from 'react'
import { usePostUserSingInMutation } from '../features/userApi'

export default function SingInGoogle() {

    const [user, setUser] = useState(0)

    let [newUser] = usePostUserSingInMutation()

    const buttonDiv = useRef(null)
    // console.log(buttonDiv.current) 

    async function handleCredentialResponse(response){
       let userObject = jose.decodeJwt(response.credential)

        const data = {
          mail: userObject.email, 
          password: userObject.sub, 
          from:'google',
          id: userObject._id,
        }

        newUser(data)
        .then(response =>  setUser(localStorage.setItem('useriInfo', JSON.stringify(response.data.response.user))))
        
       
        

        // window.location.replace('/')
      }
      // console.log(user)

    useEffect(() =>{
        /* global google */
        google.accounts.id.initialize({
            client_id: '858987294668-ujt6gjb9nmuhec61k7kavpnmva2lunt5.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signup'
          });
          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "filled_blue", size: "mediun", text:'singup_with' , shape: "circle", type:"standard"}  // customization attributes
          );
    },[])


  return (
    <>
        <div ref={buttonDiv}></div>
    </>
  )
}
