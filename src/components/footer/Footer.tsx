import {FC} from 'react'
//import { Icon } from '../navbar/Navbar.style'
import {Container, Logo, Wrapper, Text, IconWrap,Icon } from './Footer.style'

const date = new Date()
const Footer: FC = () => {
    

    return (
        <>
            <Container>
                <Logo>Chuboi</Logo>
                <Wrapper>
                    <IconWrap>
                    <Icon><i className="fa fa-facebook" aria-hidden="true"></i></Icon>
                     <Icon><i className="fa fa-linkedin" aria-hidden="true"></i></Icon>
                     <Icon><i className="fa fa-github" aria-hidden="true"></i></Icon>   
                        <Icon><i className="fa fa-instagram" aria-hidden="true"></i></Icon> 
                    </IconWrap>
                    <Text>&copy; copyright {date.getFullYear()}  Onyechere Favour</Text>
                </Wrapper>
        </Container>
        </>
    )
}

export default Footer