import React ,{useState}from 'react'

const TextForm = (props) => {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked!")
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("conversion to uppercase is successfull","success")
    }
    const handleOnChange=(event)=>{
        console.log("On change handle!")
        setText(event.target.value)
    }
    const handleLoClick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("Conversion to lowercase is successfull","success")
    }
    const handleTicase=()=>{
        let newtext=text.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
        setText(newtext)
        props.showAlert("Conversion to titlecase is successfull","success")
    }
    const handlecopy=()=>{
        let text=document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied the text in clipbord","success")
    }
    const handlespace=()=>{
        let words=text.split(/[ ]+/)
        let newtext=words.join(" ")
        setText(newtext)
        props.showAlert("Extra space removed","success")
    }
    const handleclear=()=>{
        setText("")
        props.showAlert("Cleared the text","success")
    }
    const [text,setText]=useState("")
    
    return (
        <div className='container my-3'>
            <h3 className={`text-${props.mode==='dark'?'light':'dark'} mb-5`}  >{props.heading}</h3>
            <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleOnChange} id="mybox" row="8" style={{height: '200px',backgroundColor:props.mode==='dark'?'rgb(22 64 96)':'white'} }></textarea>
            </div>
            <b><p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} cahracters</p></b>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTicase}>Convert to Titlecase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlespace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclear}>Clear Text</button>
        </div>
    );
}

export default TextForm
