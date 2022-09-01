import { useRef } from "react"


export default function Input() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4= useRef(null)
    const inputRef5= useRef(null)
    
    const pintar = (e) =>{
    e.preventDefault()
    console.log("city: " + inputRef.current.value);
    console.log(inputRef2.current.value);
    console.log(inputRef3.current.value);
    console.log(inputRef4.current.value);
    console.log(inputRef5.current.value);
}

return (
    <div>
        <form ref={inputRef}>
        <input name="city" type="text" placeholder="city" ref={inputRef} />
        <input name="country" type="text" placeholder="country" ref={inputRef2} />
        <input name="photo" type="text" placeholder="photo" ref={inputRef3}></input>
        <input name="population" type="number" placeholder="population" ref={inputRef4}></input>
        <input name="fundation" type="text" placeholder="fundation" ref={inputRef5}></input>
        <button onClick={pintar} >Send</button>
        </form>
    </div>
    )
    }   



 
// export default function Input(props) {

// const info = props.data

// const inputview = (info)=>(
//     <div>
//         <input name={info.dato} type={info.tipo} placeholder={info.dato}></input>
//     </div>
// )

// const HandleSubmit= (event)=>{
//     event.preventDefault();
// };

// return (
//     <div>
//         <form>
//         {info.map(inputview)} 
//         <button >Send</button>
//         </form>
//     </div>
// )
// }
