import '../../../styles/Activities.css'
export default function Activities(props) {

    const activities = props.data

    return (
        <div className="Activity-Container">
            <img className='Activity-Img' src={activities.photo} />
            <h4 className='Activity-Title' >{activities.name}</h4>
        </div>
    )
}