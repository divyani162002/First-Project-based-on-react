import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase !","success");

  }
  const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text );
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase !","success");
  }
  const handleClear = () => {
    //console.log("Uppercase was clicked" + text );
    let newText = "";
    setText(newText)
    props.showAlert("Text is clear !","success");
  }
  const handleToCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied !","success");

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("ExtraSpace is removed from text !","success");
    
  }
  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  //text="new text";(wrong way to set text)
  // setText(" new text") ;(correct way to set Text);
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleToCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2> your text summary</h2>
        <p> {text.split("").length} words and {text.length}characters</p>
        <p>{0.008 * text.split("").length}</p>
        <h2>Preview</h2>
        <p> {text.length > 0 ? text : "Enter some text here to preview"}</p>
      </div>
    </>
  )
}
