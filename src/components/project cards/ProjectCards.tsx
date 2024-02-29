import { Container, Card, Image, Description,Wrapper, Links, LinkToSite, LinkToCode } from './ProjectCards.style'
import vidtube from '../../assets/vidtube image1.png'
import swiftscribe from '../../assets/swiftscribe project 2.png'
import nerzpaints from '/src/assets/Screenshot 2024-02-29 205926.png'
import aiquotes from '../../assets/ai quotes.png'
import { Link } from 'react-router-dom'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FC } from 'react'
import datapulse from '../../assets/datapulse network.png'

interface Styles {
    color: string;
    textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

const style : Styles = {
    color: 'orangered',
    textTransform:"uppercase"
}

const ProjectCards: FC= () => {
    
    return (
        <>
        <Container>
        <Card>
                    <Image src={datapulse} /> 
                    <Wrapper>
                    <Description>Datapulse is a fullstack sme website that handles data and airtime subscription along with many services</Description>
                    <Links>
                            <LinkToSite><Link to={'https://datapulsenetwork.netlify.app'}  style={{color:'blue', textTransform:"uppercase"}}><OpenInNewIcon/> Datapulse network</Link></LinkToSite>
                        <LinkToCode><Link to={'https://github.com/Chuboii/datapulse-network'}  style={style}><OpenInNewIcon/> source code</Link></LinkToCode>
                                 
                        </Links>
                    </Wrapper>
                </Card>
                
         <Card>
                    <Image src={vidtube} /> 
                    <Wrapper>
                    <Description>Vidtube is a fullstack video sharing platform where you can watch your favorite videos and share your videos too.</Description>
                    <Links>
                            <LinkToSite><Link to={'https://viddtube.netlify.app'}  style={{color:'blue', textTransform:"uppercase"}}><OpenInNewIcon/> vidtube</Link></LinkToSite>
                        <LinkToCode><Link to={'https://github.com/Chuboii/vidtube-client'}  style={style}><OpenInNewIcon/> client</Link></LinkToCode>
                        <LinkToCode><Link to={'https://github.com/Chuboii/vidtube-server'}  style={style}><OpenInNewIcon/> server</Link></LinkToCode>
              
                        </Links>
                    </Wrapper>
                </Card>

                <Card>
                    <Image src={swiftscribe} />   
                    <Wrapper>
                    <Description>Swiftscribe is a blogging site where users can create posts and read posts from other users in the platform.</Description>
                    <Links>
                            <LinkToSite><Link to={'https://swiftscribe.netlify.app'} style={{color:'blue', textTransform:"uppercase"}}><OpenInNewIcon/> swiftscribe</Link></LinkToSite>
                        <LinkToCode><Link  style={style} to={'https://github.com/Chuboii/SwiftScribet'}><OpenInNewIcon/> source code</Link></LinkToCode>
              
                        </Links>
                    </Wrapper>
                </Card>

                <Card>
                    <Image src={aiquotes} />  
                    <Wrapper>
                    <Description>AI Quotes is a quote generator site where you get different categories of quotes and jokes. Non-stop fun.</Description>
                    <Links>
                            <LinkToSite><Link to={'https://viddtube.netlify.app'} style={{color:'blue', textTransform:"uppercase"}}><OpenInNewIcon/> Ai quotes</Link></LinkToSite>
                        <LinkToCode><Link  style={style} to={'https://github.com/Chuboii/vidtube-client'}><OpenInNewIcon/> source code</Link></LinkToCode>
                        </Links>
                    </Wrapper>
                </Card>

                <Card>
                    <Image src={nerzpaints} />  
                    <Wrapper>
                    <Description>Nerzpaints is a paint company where you check out their paint products</Description>
                    <Links>
                            <LinkToSite><Link to={'https://nerzpaints.com'} style={{color:'blue', textTransform:"uppercase"}}><OpenInNewIcon/> Ai quotes</Link></LinkToSite>
                        </Links>
                    </Wrapper>
                </Card>

                
        </Container>
        </>
    )
}

export default  ProjectCards