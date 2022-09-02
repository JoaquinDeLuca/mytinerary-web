import  '../styles/FormEditCity.css'

export default function FormEditCity() {
  return (
      <div className='FormEditCity-Container'>
        <h2 className='FormEditCity-h2'>Edit City</h2>
        <div className='FormEditCity-Containerbox'>
            <input className='FormEditCity-input' type="text" name="City" placeholder='City'/>
            <input className='FormEditCity-input' type="text" name="Country" placeholder='Country'/>
            <input className='FormEditCity-input' type="text" name="Photo" placeholder='URL Photo'/>
            <input className='FormEditCity-input' type="number" name="Population" placeholder='Population'/>
            <input className='FormEditCity-input' type="number" name="Fundation" placeholder='Fundation'/>
            <button className='FormEditCity-button'>Send</button>
        </div>
      </div>
  )
}
