import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/TextEditor.css"


export default function TextEditor() {
    const [newMessage, setNewMessage] = useState([])
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [strikethrough, setStrikethrough] = useState(false);

    const button = useRef(null)

    let comment = []

    const selectBold = event => {

        setBold(!bold);
        document.execCommand('bold', false, null);
        // comment.concat("**" + newMessage + "**")
        // console.log(comment)
    }
    const selectItalic = () => {
        setItalic(!italic);
        document.execCommand('italic', false, null);
    }
    const selectUnderline = () => {
        setUnderline(!underline);
        document.execCommand('underline', false, null);
    }
    const selectStrikethrough = () => {
        setStrikethrough(!strikethrough);
        document.execCommand('strikethrough', false, null);
    }

    const handleChange = event => {
        const value = event.currentTarget.textContent
        // setNewMessage([...newMessage, value])
        // console.log(value)
    }
    const saveData = event => {
        event.preventDefault();
        const value = event.target.lastChild.innerText
        // console.log(event.target.lastChild.innerText)
        setNewMessage([...newMessage, value])
    }

    useEffect(() => {
        console.log(newMessage)
    }, [newMessage])


    return (
        <div className="Text-Container" >
            <div className="Text-ButtonContainer">
            </div>
            <form className="Text-AreaContainer" onSubmit={saveData}>
                <button ref={button} className={`Text-Button ${bold ? "active" : ""} `} onClick={selectBold}><b>b</b></button>
                <button ref={button} className={`Text-Button ${italic ? "active" : ""} `} onClick={selectItalic}><i>i</i></button>
                <button ref={button} className={`Text-Button ${underline ? "active" : ""} `} onClick={selectUnderline}><u>u</u></button>
                <button ref={button} className={`Text-Button ${strikethrough ? "active" : ""} `} onClick={selectStrikethrough}><s>s</s></button>
                <div contentEditable={true} className="Text-Area" onInput={handleChange}></div>
            </form>
        </div>
    );
}