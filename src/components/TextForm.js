import React, { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Textarea is empty", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text="New text"; // wrong way to change the text
    // setText("New text"); // correct way to change the text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#03031e' : 'white' }}>
                <div>
                    <h3 className='my-4'>{props.heading}</h3>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#03031e' : 'white', color: props.mode === 'light' ? '#03031e' : 'white' }} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
                </div>
                <div className="container my-5">
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>It takes {(text.split(" ").filter((element) => { return element.length !== 0 }).length) * 0.008} minutes to read the text</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : 'Nothing to preview !'}</p>
                </div>
            </div>
        </>
    )
}
