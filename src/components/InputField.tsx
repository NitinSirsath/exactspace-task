import React, { useState } from "react";
import { Container } from "./inputField.style";
import SendIcon from "../assets/send.png";


const user_list = [
  {
    name: "Alan",
    background: "#DE4B52",
  },
  {
    name: "Bob",
    background: "#D5E369",
  },
  {
    name: "Carol",
    background: "#ED8C8D",
  },
  {
    name: "Dean",
    background: "#f7763b",
  },
  {
    name: "Elin",
    background: "#3bf76a",
  },
];


interface IProps {
  setUserData: any;
}
const InputField = ({ setUserData }: IProps) => {
  const [inputValue, setInputValue] = useState("");
  // const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const randomNumber = Math.floor(Math.random() * 5);

  const handleClick = () => {
    if(inputValue !== ''){
      setInputValue('')
      setUserData((prev: any) => [
        ...prev,
        {
          name: user_list[randomNumber].name,
          message: inputValue,
          background: user_list[randomNumber].background,
        },
      ]);
    }
    
  };

return (
    <Container>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>
        <img src={SendIcon} alt="send" height={30} />
      </button>
    </Container>
  );
};

export default InputField;
