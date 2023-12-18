import styled from 'styled-components'

export const Container = styled.div`
  background:transparent;
  position: relative;
  top: 21rem;
  height: 100%;
  max-height: 600px;
  margin:auto;
  margin-bottom:2rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  background-color: #151515;
  padding-top: 4rem;
  width: 80%;
  @media screen and (max-width:768px){
    top: 16rem;
    padding-top: 3rem 1rem;
    max-height: 800px;
    width:100%;
    margin:auto;
    left:1rem;
  }
/*
  
  @media screen and (max-width:768px){
    width:90%;
    border-radius:10px;
    height: 250px;
  } */
`
export const ArrowLeft = styled.img`

`

export const ArrowRight = styled.img`

`

export const Text = styled.p`
font-family: 'Rubik Maps';
font-size: 17px;
color: gray;
text-align: center;
font-family: 'Oswald', sans-serif;
`
export const SkillText = styled.div`
font-family: 'Rubik Maps';
font-size: 19px;
color: gray;
text-align: center;
text-transform:capitalize;
margin-top: .5rem;


@media screen and (min-width:768px) {
  font-size: 20px;
  
}
`

export const H2 = styled.h2`
    font-family: 'Rubik Doodle Triangles';
  font-size: 40px;
   margin: 0;
`
export const Box = styled.div`

  width:100%;
  height:300px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

`
export const Icons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80%;

`

export const Img = styled.img`

 @media screen and (min-width:768px) {
  margin-left: 2rem;
}
`

export const Wrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`