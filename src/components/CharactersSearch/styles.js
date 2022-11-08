import styled from "styled-components";

export const Fieldset = styled.fieldset`
    width: 50%;
    color: #fff;
    border-radius: 10px;
    margin: 20px auto;
    @media(max-width:768px) {
        width: 80%;
        margin: 20px auto;
    }
`;

export const Input = styled.input`
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #fff;
    margin: 10px;
    @media(max-width:768px) {
            width: 80%;
            margin: 10px auto;
            display: block;
    }
`;

export const Button = styled.button`
    display: inline-block;
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    background: #4A9756;
    color: #fff;
    margin: 0 auto;
    border: 2px solid #fff;
    &:hover{
        border: 2px solid #4A9756;
        background: #fff;
        color:#4A9756;
      }
    @media(max-width:768px) {
        display: block;
        width: 80%;
        margin: 0 auto;
    }
`;

export const searchCardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

export const searchCard = styled.div`
    width: 25%;
    background: #0E2317;
    border: 2px solid #fff;
    margin: 10px;
    @media(max-width:768px){
        width: 80%;
    }
`;

export const searchName = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color:#fff;
`;

export const searchContainerImg = styled.div`
    width: 30%;
    margin: 10px auto;
`;

export const searchImg = styled.img`
    width: 100%;
    border-radius: 5px;
`;