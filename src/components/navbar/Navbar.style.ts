import styled from 'styled-components'

interface HeaderProps {
    changebg: string
}

interface LinkWrapProps {
    display: string
}

interface IconWrapProps {
  display:string
}

export const DisplayMenu = styled.div`
display: block;
   @media screen and (min-width: 768px) {
     display:none;
   }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items:  center;
  position: fixed;
  top: 0;
  left: 0;
 right: 0;
 height: 40px;
 z-index: 2000;
  padding:1rem 3rem;
  transition: all .5s;
   background-color: ${({ changebg }) => changebg};
  @media screen and (max-width:768px){
    padding:1rem 2rem;
  }
`

export const Logo = styled.h2`
  display: flex;
  @media screen and (max-width: 768px) {
     display:none;
   }
`

export const Button = styled.a`
  display: flex;
  border: 1px solid white;
  background-color: transparent;
  padding:.5rem 1rem;
  color: white;
`

export const LinkWrap = styled.div<LinkWrapProps>`
  display: flex;
  margin-right: 1.5rem;

  @media screen and (max-width:768px){
    position: absolute;
    left:0;
    flex-direction: column;
    top: 3rem;
    padding:1rem;
    right: 2rem;
    opacity: ${({ display }) => display};
    display:${({display}) => display === "1" ? "block" : "none"};
    transition: all .6s;
    z-index: 1;
   }
`

export const IconWrap = styled.div<IconWrapProps>`
  display: flex;
   margin-right: 1rem;

   @media screen and (max-width:768px){
    position: absolute;
    left:.4rem;
    transition:all .5s;
    flex-direction: column;
    top: 13rem;      
    opacity:${({display}) => display};
    
   }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  color:   rgba(255, 255, 255,.7);
  
 @media screen and (max-width:768px){
    margin-top: 1rem;
    background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 1rem;

    display: block;
    width: 100%;

    &:nth-of-type(2){
       width: 80%;
    }
   
    &:nth-of-type(3){
       width: 60%;
    }
   
   }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: .5rem;
  width: 30px;
  cursor: pointer;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255,.7);
   color:  rgba(255, 255, 255,.7);
   justify-content: center;
   transition: all .2s ease-in-out;

   &:hover{
    border: 3px solid;
    transform: rotateY(36deg);
   }

 @media screen and (max-width:768px){
    margin-top: 2rem;
   
   }
`
