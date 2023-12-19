import { DisplayMenu, Wrapper, Header, Logo, Button, LinkWrap, IconWrap, Link, Icon } from './Navbar.style';
import React,{useRef, useEffect, useCallback, useReducer } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TrackVisibility from 'react-on-screen';
 

interface NavbarReducer {
    isPageScrolled: boolean;
    isToggled: boolean;
    iconToggleDisplay: boolean
}

const TOGGLE_INITIAL_STATES : NavbarReducer= {
    isPageScrolled: false,
    isToggled: false,   
    iconToggleDisplay:true
}

interface stateObject {
    isToggled: boolean;
    isPageScrolled: boolean;
    iconToggleDisplay:boolean;
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
        case "TOGGLE_ICONS_DISPLAY":
            return {
              ...state, iconToggleDisplay:payload
            }
        default:
            return state
    }
}


export default function Navbar() {
    const [state, dispatch] = useReducer(toggleReducer, TOGGLE_INITIAL_STATES)
    const links = useRef()

    useEffect(() => {

        const scrollFunction = () => {
            const scrollY = window.scrollY
        
            if (scrollY > 50) {
                dispatch({ type: "PAGE_SCROLLED", payload: true })
            }
            else {
                dispatch({ type: "PAGE_SCROLLED", payload: false })
  
            }
         // console.log(scrollY)
          if(scrollY < 400){
            dispatch({type:"TOGGLE_ICONS_DISPLAY", payload:true})
          }
          else{
       dispatch({type:"TOGGLE_ICONS_DISPLAY", payload:false})
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
            <TrackVisibility partialVisibility>
                {({isVisible}) =>
                    <Header changebg={state.isPageScrolled ? "#1c1c1d" : "transparent"}>
                        <Logo className={isVisible && 'animate__animated animate__rubberBand'} >Chuboi</Logo>
                        <DisplayMenu>
                            {state.isToggled ?
                                <CloseIcon onClick={enableNavBar} />
                                : <MenuOutlinedIcon onClick={enableNavBar
                                } />
                            }
                        </DisplayMenu>
                        <Wrapper>
                            <LinkWrap
                                display={state.isToggled ? "1" : '0'}
                                ref={links}
                                className={isVisible && 'animate__animated animate__rubberBand'} 
                            >
                                <Link className={state.isToggled ? "animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"} href="#">Home</Link>
                                <Link className={state.isToggled ? "animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"} href="#skills">Skills</Link>
                                <Link className={state.isToggled ? "animate__animated animate__backInLeft" : "animate__animated animate__rubberBand"} href="#projects">Projects</Link>
                            </LinkWrap>

                            <IconWrap display={state.iconToggleDisplay ? "1" : '0'}
                            >
                                <Icon className={isVisible && 'animate__animated animate__rubberBand'} ><i className="fa fa-facebook" aria-hidden="true"></i></Icon>
                                <Icon className={isVisible && 'animate__animated animate__rubberBand'} ><i className="fa fa-linkedin" aria-hidden="true"></i></Icon>
                                <Icon className={isVisible && 'animate__animated animate__rubberBand'} ><i className="fa fa-github" aria-hidden="true"></i></Icon>
                                <Icon className={isVisible && 'animate__animated animate__rubberBand'} ><i className="fa fa-instagram" aria-hidden="true"></i></Icon>
                            </IconWrap>

                            <Button className={isVisible && 'animate__animated animate__rubberBand'} href='#contact'>Let's Connect</Button>
                        </Wrapper>
                    </Header>
                }
    </TrackVisibility>            
            </>
  );
}