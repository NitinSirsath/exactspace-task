import React,{useState} from 'react'
import ChatWindow from '../components/ChatWindow';
import Header from '../components/Header';
import InputField from '../components/InputField';
import {Container} from './home.style'
import {data} from '../components/userData'


const Home = () => {

  const [userData, setUserData] = useState(data)
  
  return (
    <Container>
        
      <Header />
        <div style={{ borderBottom: '2px solid lightgrey'}}></div>
        <ChatWindow userData={userData}/>
        <InputField />
    </Container>
  )
}

export default Home;
