import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   margin-top: 2rem;
   width: 90%;

   @media screen and (max-width:768px){
    grid-template-columns: 1fr;
   }

`

export  const Image = styled.img`
 width: 100%;
 height: 100%;

 
  border-radius: 30px;
`
export  const Card = styled.div`
  width:95%;
  height: 250px;
margin-bottom: 1.5rem;
  border-radius: 30px;
position: relative;
transition: all 1s;



  ::before{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  height: 0;
    border-radius: 30px;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, #4A2FBD 111.58%);
    transition: all 1s;

  }

  &:hover::before{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  height: 100%;
    border-radius: 30px;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, #4A2FBD 111.58%);
    transition: all 1s;

  }
`
export const Description = styled.div`
font-family: 'Poppins';
text-align: center;
color: white;
font-size: 20px;

@media screen and (max-width: 768px) {
font-size:15px;
}

@media screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 15px;
}

    `

export const Links = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
`
export const LinkToCode = styled.div`
display: flex;

 align-items: center;
 background:black;
 padding:.5rem 1rem;
 border-radius: 5px;
 margin: .3rem;
`
export const LinkToSite = styled.div`
display: flex;

align-items: center;
background:black;
padding:.5rem 1rem;
border-radius: 5px;
margin: .3rem;
`
export const Wrapper = styled.div`
opacity: 0;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
padding: 1rem;
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  transition: all .5s;

  &:hover{
    opacity: 1;
  }
`