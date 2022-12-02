import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    background-color: #499cc3;
    height: 100vh;
    width: 100%;
` 

export const WhiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
    gap: 2rem;
    padding: 2rem;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 0px 19px 41px 3px rgba(0,0,0,0.5);
    background-color: white;

     img{
        width: 90%;
    }

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: #084d6e;
    }
 
`

export const ButtonNext = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 2rem;
    font-weight: 400;
    background: #F9B35F;
    padding: 1rem;
    border-radius: 50%;
`