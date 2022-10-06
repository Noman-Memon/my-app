import React, { useState } from 'react'

function TextForm(props) {
  const handleUpclick = () => {
    console.log('uppercase was cliked')
    let new_text = text.toUpperCase()
    setText(new_text)
  }
  const handleOnchange = (event) => {
    // onchange function give us an event object
    console.log('On change')
    setText(event.target.value)
  }
  const [text, setText] = useState('Type your text here')
  //   text = 'new text' // we cannot directly change satate value we must use function(wrong waty to change state)
  //   setText('new text') correct way to change value
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn.primary" onClick={handleUpclick}>
        click here to change
      </button>
    </div>
  )
}

export default TextForm
