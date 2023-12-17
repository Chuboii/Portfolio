import styled from 'styled-components'

export const Container = styled.div`
  background:#1c1c1d;
  position: relative;
  top: 18rem;
  width: 90%;
  margin:auto;
  margin-bottom:2rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  
  @media screen and (max-width:768px){
    width:90%;
    border-radius:10px;
  }
`

export const Text = styled.p`
  margin:.5rem 0;
`
export const H2 = styled.h2`
   margin:.5rem 0;
`
export const Box = styled.div`
  overflow:hidden;
  width:100%;
  height:300px;
`

