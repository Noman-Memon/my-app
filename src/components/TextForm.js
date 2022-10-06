import React, { useState } from 'react'

function TextForm(props) {
  const handleUpclick = () => {
    // console.log('uppercase was cliked')
    let new_text = text.toUpperCase()
    setText(new_text)
  }
  const handleLoclick = () => {
    // console.log('uppercase was cliked')
    let new_text = text.toLowerCase()
    setText(new_text)
  }

  const handleOnchange = (event) => {
    // onchange function give us an event object
    // console.log('On change')
    setText(event.target.value)
  }
  const [text, setText] = useState('Type your text here')
  //   text = 'new text' // we cannot directly change satate value we must use function(wrong waty to change state)
  //   setText('new text') correct way to change value
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'grey' : 'light' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              background: props.mode === 'dark' ? 'grey' : 'light',
              color: props.mode === 'dark' ? 'white' : 'light',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          click here to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>
          click here to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2> You text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} charcters
        </p>
        <p> {0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
