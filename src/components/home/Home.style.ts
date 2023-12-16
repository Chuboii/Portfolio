import styled from "styled-components";


export const Container = styled.div`

  color: white;
  position:relative;
  top: 24rem;
  transform: translateY(-50%);
  padding: 0 3rem;

`

export const WrapText = styled.div`
  width: 60%;
`

export const WrapImage = styled.div`
  animation: bounce 2s infinite ease-in-out;
  

  @keyframes bounce {
    0%{
        transform: translateY(20px);
    }
    50%{
        transform: translateY(0)
    }
    100%{
        transform: translateY(20px);
    }
  }
`
export const Text = styled.div`
   font-family: 'Nunito Sans';
   font-size: 20px;
`
export const Intro = styled.h1`
  margin: .4rem 0;
  font-family: 'Rubik Maps';
  font-size: 55px;
`
export const Welcome = styled.div`
background: rgb(2,0,36);
background: radial-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,2,99,1) 35%);
padding: .9rem;
border: .5px solid white;
width: 270px;
text-align:center;
font-size: 24px;
font-family: 'Rubik Doodle Shadow';
`
export const Image = styled.img`
  width: 400px;
`

export const Connect = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  top:3rem;
  font-weight:700;
`

export const Box = styled.div`
   display: flex;
  align-items: center;
  justify-content: space-between;
`