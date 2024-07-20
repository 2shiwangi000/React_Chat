import React, { useState } from 'react'

const InputText = ({addMessage}) => {
  const [message,setMessage] = useState('')
  const sendMessage = (e) => {
    // e.preventDefault()
    addMessage(message)
    setMessage('')
  }
  return (
    <div className='inputtext_container'>
        <textarea value={message} name='message' id='message'  rows='6' placeholder='Input Message ...' onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={() => sendMessage()}>send</button>
    </div>
  )
}

export default InputText