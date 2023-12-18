import styled from "styled-components";

export const Container = styled.div`
background-color: white;
color: black;
width: 70%;
margin:auto;
padding: 3rem;
border-radius: 30px;
box-sizing: border-box;
position: relative;
bottom: 4rem;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width:768px){
   flex-direction:column;
   padding:1rem;
   justify-content: normal;
   width: 90%;
   align-items: normal;
  }

`

export const Wrapper = styled.div`
  width: 50%;

  @media screen and (max-width:768px){
   width: 80%;
  }
`


export const H1 = styled.h1`
  font-size: 30px;
  @media screen and (max-width:768px){
   font-size: 18px;
  width: 300px;
  }
`

export const Form = styled.form`
 position: relative; 
 width: 90%;
margin-left: 1rem;

@media screen and (max-width:768px){
   width: 100%;
   margin: 0;
  }
`

export const Input = styled.input`
  border: 2px solid #AA367C;
  background-color: transparent;
  padding:1rem;
  border-radius: 10px;
  width: 90%;
  color: black;
  &:focus{
    border: 2px solid #AA367C;
    outline: none;
  }

  @media screen and (max-width:768px){
   width: 100%;
  }
`

export const Button = styled.button`
 background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  position: absolute;
  top: .25rem;
  width: 120px;
  right:.2rem;

  @media screen and (min-width:768px) and (max-width:1024px){
   right: -.2rem;
  }

  @media screen and (max-width:768px){
   right: -2rem;
  }
`
