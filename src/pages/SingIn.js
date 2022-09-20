import SingInForm from '../components/SingInForm'
import SingInGoogle from "../components/SingInGoogle"
import SingInPages from '../styles/SingInPages.css'

export default function SingIn() {
  return (
    <div className='container'>
      
        <SingInForm /> 
        <SingInGoogle />
    </div>
  )
}
