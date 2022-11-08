import styled from "styled-components";

export const Content = styled.div`
    background-image: linear-gradient( 115deg, #0E2317 20%, #0E2317 100%, 
    transparent 23.57%, transparent 100% );
`;

export const title = styled.h1`
    color:#fff;
    padding: 20px;
    margin: 0 auto;
    text-align:center;
    letter-spacing: 1px;
    width: 20%;
    @media(max-width: 768px) {
            padding: 20px 0;
            width: 100%;
    }
`;

export const Card = styled.div`
    background: #fff;
    margin: 15px 5px;
    padding: 5px;
    box-shadow: rgba(250, 250, 250, 0.35) 0px 5px 15px;
    border-radius: 10px;
    height: 250px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const charactersCard = styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    background: #fff;
`;

export const titleCard = styled.h2`
    color:#000;
    font-size: 1.2em;
    text-align: center;
`;

export const containerImgCard = styled.div`
    width:100px;
    margin: 0 auto;
`;

export const imgCard = styled.img`
    border-radius: 10px;
    height: 120px;
`;


