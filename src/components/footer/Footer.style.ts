import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 0 3rem;
`
export const Wrapper = styled.div`

`
export const Logo = styled.div`
font-size: 30px;
font-family: 'Rubik Doodle Shadow';
`
export const Text = styled.div`
font-family: 'Poppins';
margin-top: .5rem;
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