import styled from "styled-components";

export const Container = styled.div`
    height: 10%;
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    input{
        width: 70%;
        height: 37px;
    border-radius: 17px;
    padding: 8px 25px;
    
    }

    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;

        :hover{
            transition: 0.2s all;
            scale: 1.2;
        }
    }

    
`

