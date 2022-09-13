import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import { usePostUserMutation } from '../features/userApi'

export default function SingUpGoogle() {

    let [newUser] = usePostUserMutation()

    const buttonDiv = useRef(null)
    // console.log(buttonDiv.current) 

    async function handleCredentialResponse(response){
       let userObject = jose.decodeJwt(response.credential)

        const data = {
            name: userObject.given_name, 
            lastName: userObject.family_name, 
            mail: userObject.email, 
            password: userObject.sub, 
            photo: userObject.picture, 
            country: 'Argentina', 
            role:'user', 
            from:'google'
        }
        newUser(data)
    }

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
