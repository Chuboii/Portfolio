import styled from "styled-components";

export const Form = styled.form`
width: 60%;
position: relative;
bottom: 3rem;

@media screen and (max-width:768px){
    width: 100%;
    margin: 0;


}
`
export const Wrapper = styled.div`
  width: 100%;
`

export const H1 = styled.h1`
margin: 0;

@media screen and (max-width:768px){
    max-width: 400px;
    margin: 1rem 0;
}
`

export const Input = styled.input`
 padding: 1.2rem;
 width: 100%;
 border-radius: 10px;
 background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1px );
-webkit-backdrop-filter: blur( 1px );
 border:1px solid rgba(255,255, 255, .5);
 margin-right: .3rem;

 &::placeholder{
    color: white;
    font-family: 'Poppins';
    text-transform: capitalize;
    font-size: 15px;
 }
`

export const Textarea = styled.textarea`
 width: 100%;
 height: 200px;
 padding: 1rem;
 border-radius: 10px;
 background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1px );
-webkit-backdrop-filter: blur( 1px );
 border:1px solid rgba(255,255, 255, .5);
 margin-right: .3rem;
margin-top: .1rem;
 &::placeholder{
    color: white;
    font-family: 'Poppins';
    text-transform: capitalize;
    font-size: 15px;
 }
`
export const Box = styled.div`
  margin-top: .3rem;
  display: flex;
`

export const Button = styled.button`
  margin-top: 1rem;
  background-color: white;
  color: black;
  border-radius: 2px;
  padding:.7rem 3rem;

`