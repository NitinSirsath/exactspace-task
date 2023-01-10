import React,{useState} from 'react'
import ChatWindow from '../components/ChatWindow';
import Header from '../components/Header';
import InputField from '../components/InputField';
import {Container} from './home.style'
// import {data} from '../components/userData'


const Home = () => {
  const [userData, setUserData] = useState([])
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  
  
  return (
    <Container>
        
      <Header />
        {/* <div style={{ borderBottom: '2px solid lightgrey'}}></div> */}
        <hr />
        <ChatWindow userData={userData}/>
        <InputField setUserData={setUserData} />
    </Container>
  )
}

export default Home;
