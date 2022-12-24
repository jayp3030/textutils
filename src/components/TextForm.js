import React , {useState} from 'react'
import '../componentsCSS/textform.css'

function TextForm(props) {

    const [text , setText] = useState('');

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const upperCase=()=>{
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase','success')
    }
    const lowerCase=()=>{
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase','success')
    }

    const clearHandler =() =>{
        setText('')
        props.showAlert('Text cleared successfully','success')
    }

    const handleCopy=()=>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert('Text Copied Successfully','success')
    }

    // const handleCapitalize=()=>{
    //     let words = text.split(" ")
    //     for (let i = 0; i < words.length; i++) {              
    //         words[i]= words[i][0].toUpperCase() + words[i].substring(1)
    //     }
    //     const newText =words.join(" ")
    
    //     setText(newText)
    // }

    const handleExtraSpace= ()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra space removed','success')
    }


  return (
    <>
    <div className='container'>
        <h2>Enter Text to Edit or Analyze </h2>
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="mybox" style={{height:"180px"}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={upperCase}>To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={lowerCase}>To Lowercase</button>
        {/* <button className="btn btn-primary" onClick={handleCapitalize}>capitalize</button> */}
        <button disabled={text.length===0}  className="btn btn-primary" onClick={clearHandler}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpace}>Remover extra spaces</button>
    </div>
    <div className="container mt-3">
        <h2>Text Summarry</h2>
        <p> <strong>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}</strong> Words , <strong>{text.length}</strong> Characters</p>
        <p><strong>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length }</strong> minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'Nothing to preview..'}</p>
        
    </div>
    </>
  )
}

export default TextForm
