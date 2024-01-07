import { Container, Connect, WrapImage, Welcome, Text, Intro, WrapText, Image,Box } from './Home.style'
import img from '../../assets/header-img.svg'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { TypeAnimation } from 'react-type-animation';
import TrackVisibility from 'react-on-screen';

interface ClassProps {
    className: string | undefined
}
 
function Home() {
  
  return (
    <>
      <TrackVisibility partialVisibility>
        {({isVisible}) => 
          <Container>
            <Box>
              <WrapText className={isVisible && 'animate__animated animate__fadeIn'}>
                <Welcome className={isVisible && 'animate__animated animate__fadeIn'}>Welcome to my space</Welcome>
                <Intro>
                  <TypeAnimation
                    sequence={[
                      "Hi, I'm Onyechere Favour",
                      1000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: window.innerWidth < 768 ? "30px" : "50px", display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </Intro>
                <Text  className={isVisible && 'animate__animated animate__fadeIn'}>I am an accomplished Full Stack Web Developer with five years of experience, proficient in front-end and back-end technologies. I specialize in delivering innovative and user-centric web applications, tackling challenges with a problem-solving mindset. As a continuous learner and collaborative team player. Elevate your digital presence with my expertise in creating robust and dynamic web solutions.</Text>
              </WrapText>

              <WrapImage className={isVisible && 'animate__animated animate__bounce'}>
                <Image src={img}  className={isVisible && 'animate__animated animate__bounce'}/>
              </WrapImage>
            </Box>
            <Connect href='#contact'>Let's Connect <ArrowCircleRightOutlinedIcon sx={{ marginLeft: ".4rem" }} /></Connect>
          </Container>
        }
      </TrackVisibility>
      </>
  )
}

export default Home