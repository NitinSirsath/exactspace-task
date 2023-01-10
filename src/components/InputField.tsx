import React from 'react'
import {Container} from './inputField.style'
import SendIcon from '../assets/send.png'

const InputField = () => {
  return (
    <Container>
        <input type="text" /> 
        <button><img src={SendIcon} alt="send" height={30} /></button>
        </Container>
  )
}

export default InputField