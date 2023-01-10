import React from "react";
import { Container, ProfileIcon ,ChatContainer,ChatMessage,ChatMessageContainer} from "./chatWindow.style";

interface IProps {
  userData: any;
}

const ChatWindow = ({ userData }: IProps) => {
  return (
    <Container>
      <div>
        {userData.map((user: any, idx: number) => {
          const str = user.name;
          const newstr = str.split("").splice(0, 2).join("").toString();
          return (
            <ChatContainer key={idx}>
              <ProfileIcon style={{ backgroundColor: `${user.background}` }}>
                <h3>{newstr}</h3>
              </ProfileIcon>
              <ChatMessageContainer>
                <h2>{user.name}</h2>
                <ChatMessage>{user.message}</ChatMessage>
              </ChatMessageContainer>
            </ChatContainer>
          );
        })}
      </div>
    </Container>
  );
};

export default ChatWindow;
