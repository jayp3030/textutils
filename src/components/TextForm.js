import React , {useState} from 'react'
import '../componentsCSS/textform.css'

function TextForm() {

    const [text , setText] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const upperCase=()=>{
        setText(text.toUpperCase());
    }
    const lowerCase=()=>{
        setText(text.toLowerCase());
    }

    const clearHandler =() =>{
        setText('')
    }

    const handleCopy=()=>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleCapitalize=()=>{
        let words = text.split(" ")
        for (let i = 0; i < words.length; i++) {              
            words[i]= words[i][0].toUpperCase() + words[i].substring(1)
        }
        const newText =words.join(" ")
    
        setText(newText)
    }


  return (
    <>
    <div className='container'>
        <h2>Enter Text to Edit </h2>
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="mybox" style={{height:"180px"}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>To Uppercase</button>
        <button className="btn btn-primary" onClick={lowerCase}>To Lowercase</button>
        <button className="btn btn-primary" onClick={handleCapitalize}>capitalize</button>
        <button className="btn btn-primary" onClick={clearHandler}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container mt-3">
        <h2>Text Summarry</h2>
        <p>{text.split(" ").length} Words , {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
        
    </div>
    </>
  )
}

export default TextForm
