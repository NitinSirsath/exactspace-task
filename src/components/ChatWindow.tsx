import React from 'react'
import {Container} from './chatWindow.style'

interface IProps {
  userData : any
}

const ChatWindow = ({userData}:IProps) => {
  console.log(userData);
  
  return (
    <Container>
      <div>
        {userData.map((user:any) => {
          const str = user.name
          const newstr = str.split('').splice(0,2).join('').toString()
          return <div key={user.id}>
            <h3>{newstr}</h3>
            <div>
              <h2>{user.name}</h2>
              <h3>{user.message}</h3>
            </div>
          </div>
        })}
      </div>
    </Container>
  )
}

export default ChatWindow