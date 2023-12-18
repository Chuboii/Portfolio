import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 1rem;
max-width: 700px;
width: 100%;
margin-top: 2rem;
`

export const Tab = styled.div`
width: 100%;
padding: .6rem;
background-color: #151515;;
border: 1px solid white;
font-weight: 700;
text-align: center;
cursor: pointer;
   
   &:nth-child(1){
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);

}

&:nth-child(3){
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}
`
