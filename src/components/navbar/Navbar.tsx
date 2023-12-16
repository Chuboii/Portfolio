import { DisplayMenu, Wrapper, Header, Logo, Button, LinkWrap, IconWrap, Link, Icon } from './Navbar.style';
import React,{ useEffect, useState, useCallback, useReducer } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface NavbarReducer {
    isPageScrolled: boolean;
    isToggled: boolean;
}

const TOGGLE_INITIAL_STATES : NavbarReducer= {
    isPageScrolled: false,
    isToggled: false,   
}

interface stateObject {
    isToggled: boolean;
    isPageScrolled: boolean;
}

interface actionObject {
    type: string;
    payload: boolean;
}



const toggleReducer : React.Reducer<stateObject, actionObject> = (state, action) => {
    const { type, payload } = action
    
    switch (type) {
        case "PAGE_SCROLLED":
            return { ...state, isPageScrolled: payload }
        case "TOGGLE_NAVBAR":
            return { ...state, isToggled: payload }
        case "INSERT_TEXT":
                return { ...state, text: payload }
        default:
            return state
    }
}


export default function Navbar() {
    const [state, dispatch] = useReducer(toggleReducer, TOGGLE_INITIAL_STATES)


    useEffect(() => {

        const scrollFunction = () => {
            const scrollY = window.scrollY
        
            if (scrollY > 50) {
                dispatch({ type: "PAGE_SCROLLED", payload: true })
            }
            else {
                dispatch({ type: "PAGE_SCROLLED", payload: false })
  
            }
        }

        window.addEventListener("scroll", scrollFunction)
  
    return () => {
     window.removeEventListener("scroll", scrollFunction)
  
    }
  }, [state.isPageScrolled])
  
  const enableNavBar = useCallback(() => {
      dispatch({ type: 'TOGGLE_NAVBAR', payload: !state.isToggled })
  }, [state.isToggled])


    return (
      <>
            <Header changebg={state.isPageScrolled ? "#1c1c1d" : "transparent"}>
                <Logo>Chuboi</Logo>
                <DisplayMenu>
                    <MenuOutlinedIcon onClick={enableNavBar } />
                </DisplayMenu>
                <Wrapper>
                    <LinkWrap display={state.isToggled ? "1" : '0'}>
                        <Link className={state.isToggled ?"animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"} href="#">Home</Link>
                        <Link className={state.isToggled ?"animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"}  href="#skills">Skills</Link>
                        <Link className={state.isToggled ?"animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"}  href="#projects">Projects</Link>
                    </LinkWrap>

                    <IconWrap>
                     <Icon><i className="fa fa-facebook" aria-hidden="true"></i></Icon>
                     <Icon><i className="fa fa-linkedin" aria-hidden="true"></i></Icon>
                     <Icon><i className="fa fa-github" aria-hidden="true"></i></Icon>   
                        <Icon><i className="fa fa-instagram" aria-hidden="true"></i></Icon>   
                    </IconWrap>

                    <Button>Let's Connect</Button>
                </Wrapper>
    </Header>            
            </>
  );
}