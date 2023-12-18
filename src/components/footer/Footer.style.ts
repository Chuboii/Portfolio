import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 0 3rem;
  
  @media screen and (max-width:768px){
    
  }
`
export const Wrapper = styled.div`

`
export const Logo = styled.div`
font-size: 30px;
font-family: 'Rubik Doodle Shadow';

  @media screen and (max-width:768px){
  display:none;
  }
`
export const Text = styled.div`
font-family: 'Poppins';
margin-top: .5rem;
  
  @media screen and (max-width:768px){
  font-size:16px;
  text-align:center;
  }
`

export const IconWrap = styled.div`
  display: flex;
   margin-right: 1rem;

   @media screen and (max-width:768px){
    position: absolute;
    left: 1rem;
    transition:all .5s;
    flex-direction: column;
    top: 13rem;      
   }
`